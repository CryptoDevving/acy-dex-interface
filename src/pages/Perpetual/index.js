import { useWeb3React } from '@web3-react/core';
import React, { Component, useState, useEffect, useRef } from 'react';
import { connect } from 'umi';
import { Button, Row, Col, Icon, Skeleton, Card } from 'antd';
import samplePositionsData from "./SampleData"
import {
  AcyCard,
  AcyIcon,
  AcyPeriodTime,
  AcyTabs,
  AcyModal,
  AcyInput,
  AcyCoinItem,
  AcyPriceChart,
  AcyConfirm,
  AcyApprove,
} from '@/components/Acy';
import { getLiquidationPrice } from '@/utils/utils';
import Media from 'react-media';
import { uniqueFun } from '@/utils/utils';
import {getTransactionsByAccount,appendNewSwapTx, findTokenWithSymbol} from '@/utils/txData';
import { getTokenContract } from '@/acy-dex-swap/utils/index';
import PerpetualComponent from '@/components/PerpetualComponent';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import axios from 'axios';
import moment from 'moment';
import styles from './styles.less';
import { columnsPool } from '../Dao/Util.js';
import styled from "styled-components";
import { useConstantLoader } from '@/constants';
import {useConnectWallet} from '@/components/ConnectWallet';
import PositionsTable from './components/PositionsTable';
import ActionHistoryTable from './components/ActionHistoryTable';

const { AcyTabPane } = AcyTabs;
function getTIMESTAMP(time) {
    var date = new Date(time);
    var year = date.getFullYear(time);
    var month = ("0" + (date.getMonth(time) + 1)).substr(-2);
    var day = ("0" + date.getDate(time)).substr(-2);
    var hour = ("0" + date.getHours(time)).substr(-2);
    var minutes = ("0" + date.getMinutes(time)).substr(-2);
    var seconds = ("0" + date.getSeconds(time)).substr(-2);
  
    return hour + ":" + minutes + ":" + seconds;
    // return `${year}-${month}-${day}`;

}
function abbrNumber(number) {
  const THOUSAND = 0;
  const MILLION = 1;

  let currentDivision = -1;
  let result = '';
  let tempNumber = number;

  if (number >= 1000) {
    tempNumber /= 1000;
    currentDivision = 0;
  }

  if (number >= 1000000) {
    tempNumber /= 1000;
    currentDivision = 1;
  }

  switch (currentDivision) {
    case 0:
      result = `${tempNumber.toFixed(2)}k`;
      break;
    case 1:
      result = `${tempNumber.toFixed(2)}m`;
      break;
    default:
      result = `${number.toFixed(2)}`;
      break;
  }

  return result;
}
const defaultData = [
  ['2000-06-05', 116],
  ['2000-06-06', 129],
  ['2000-06-07', 135],
  
  
];
const StyledCard = styled(AcyCard)`
  background: transparent;

  .ant-card-bordered {
    border: none;
  }
  .ant-card-head-title {
    padding: 0;
  }
    
`;

const Swap = props => {
  const {account, library, chainId, tokenList: supportedTokens, farmSetting: { API_URL: apiUrlPrefix}} = useConstantLoader();
  console.log("@/ inside swap:", supportedTokens, apiUrlPrefix)

  const [pricePoint, setPricePoint] = useState(0);
  const [pastToken1, setPastToken1] = useState('ETH');
  const [pastToken0, setPastToken0] = useState('USDC');
  const [isReceiptObtained, setIsReceiptObtained] = useState(false);
  const [routeData, setRouteData] = useState([]);
  const [format, setFormat] = useState('h:mm:ss a');
  const [activeToken1, setActiveToken1] = useState(supportedTokens[1]);
  const [activeToken0, setActiveToken0] = useState(supportedTokens[0]);
  const [activeAbsoluteChange, setActiveAbsoluteChange] = useState('+0.00');
  const [activeRate, setActiveRate] = useState('Not available');
  const [range, setRange] = useState('1D');
  const [chartData, setChartData] = useState([]);
  const [alphaTable, setAlphaTable] = useState('Line');
  const [visibleLoading, setVisibleLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visibleConfirmOrder, setVisibleConfirmOrder] = useState(false);
  const [transactionList, setTransactionList] = useState([]);
  const [tableLoading, setTableLoading] = useState(true);
  const [transactionNum, setTransactionNum] = useState(0);

  // this are new states for PERPETUAL
  const [showActionTable, setShowActionTable] = useState(false);
  const [positionsData, setPositionsData] = useState([]);
  const { activate } = useWeb3React();


  useEffect(() => {
    if (!supportedTokens) return

    console.log("resetting page states")
    // reset on chainId change => supportedTokens change
    setPricePoint(0);
    setPastToken1('ETH');
    setPastToken0('USDC');
    setIsReceiptObtained(false);
    setRouteData([]);
    setFormat('h:mm:ss a');
    setActiveToken1(supportedTokens[1]);
    setActiveToken0(supportedTokens[0]);
    setActiveAbsoluteChange('+0.00');
    setActiveRate('Not available');
    setRange('1D');
    setChartData([]);
    setAlphaTable('Line');
    setVisibleLoading(false);
    setVisible(false);
    setVisibleConfirmOrder(false);
    setTransactionList([]);
    setTableLoading(true);
    setTransactionNum(0);
    
    // const samplePositionsData = [
    //   {
    //     indexToken : findTokenWithSymbol('ACY'),
    //     collateralToken : findTokenWithSymbol('USDT'),
    //     isLong : true,
    //     delta : 6.99,
    //     netValue : 455.95,
    //     PnL : 455.95 - 93.58,
    //     totalSize : 3000,
    //     collateral : 93.58,
    //     markPrice : 94.34,
    //     entryPrice : 94.21,
    //     liqPrice : 81.09
    //   },
    //   {
    //     indexToken : findTokenWithSymbol('ETH'),
    //     collateralToken : findTokenWithSymbol('USDT'),
    //     isLong : false,
    //     delta : 6.99,
    //     netValue : 455.95,
    //     PnL : 455.95 - 93.58,
    //     totalSize : 121.12121212,
    //     collateral : 93.58,
    //     markPrice : 94.34,
    //     entryPrice : 94.21,
    //     liqPrice : 81.09
    //   }
    // ]
    for ( let item of samplePositionsData){
      item['collateralToken'] = findTokenWithSymbol(item.collateralTokenSymbol);
      item['indexToken'] = findTokenWithSymbol(item.indexTokenSymbol);
      item['liqPrice'] = getLiquidationPrice(item);
    }
    console.log(samplePositionsData); 
    setPositionsData(samplePositionsData);
  }, [chainId])
  const refContainer = useRef();
  refContainer.current = transactionList;

  // connect to provider, listen for wallet to connect
  const connectWalletByLocalStorage = useConnectWallet();
  useEffect(() => {
    if(!account){
      connectWalletByLocalStorage()
     }
    // getTransactionsByAccount(account,library,'SWAP').then(data =>{
    //   console.log("found this tx dataa::::::", data);
    //   setTransactionList(data);
    //   if(account) setTableLoading(false);
    // })
  }, [account]);

  
  // 时间段选择
  const onhandPeriodTimeChoose = periodTimeName => {
    let pt;
    switch (periodTimeName) {
      case '24h': pt = '1D'; break;
      case 'Max': pt = '1M'; break;
    }

    let _format = 'h:mm:ss a';
    switch (pt) {
      case '1D':
        _format = 'h:mm:ss a';
        break;
      case '1W':
        _format = 'ha DD MMM';
        break;
      case '1M':
        _format = 'DD/MM';
        break;
      default:
        _format = 'h:mm:ss a';
    }
    setRange(pt);
    setFormat(_format);
  };

  useEffect(() => {
    dispatch({
      type: "swap/updateTokens",
      payload: {
        token0: activeToken0,
        token1: activeToken1
      }
    });
    const dayLength = 24*60/5;
    let reverseFlag = false;
    let timeMark = 0;
    let timeMark2 = 0;
    let timeData = [];
    let A = activeToken0.symbol;
    let B = activeToken1.symbol;
    if(A>B)
    {
      let temp = B;
      B = A;
      A = temp;
      reverseFlag = true;
    }
    console.log(A,B);
    console.log("fetching the swap Rate data!!!!!!!!!!!!!!!!");
    axios.get(
      `${apiUrlPrefix}/chart/getRate`, {params : {token0 : A , token1 : B}}
    ).then(res => {
      console.log("response",res.data);
      if(res.data){
      const historyData = res.data.History;
      timeMark = historyData[historyData.length-1].time;
      timeMark2 = historyData[0].time

      let date = new Date(timeMark*60*1000);

      for (let i = 0; i < historyData.length; i++) {
  
        while(i < 0) i++;
        const element = historyData[i];
        timeData.push(element);
        
      };

      const addData = []
      for (let i = timeMark - 24*60; i < timeMark2; i = i+5) {
        let temp2 = [(i*60*1000),  0 ] ;
        addData.push(temp2);
      } 
      console.log("timemark",timeMark - 24*60,timeMark2);
      console.log("addData",addData);

          console.log("timeData",timeData);
          const tempChart = [];
          for (let a = 0; a < timeData.length; a++) {
            if(timeData[a].time > timeMark - 24*60){
            const time = timeData[a].time*60*1000;
            let date = new Date(time);
            let dateString = date.getMinutes();
            let temp;
            if(reverseFlag)
            temp = [time, 1.0/timeData[a].exchangeRate ] ;
            else
            temp = [time,timeData[a].exchangeRate ] ;
            tempChart.push(temp);
            
          }
        }
          console.log("CHARTING!!!!!!!!!!!",tempChart);

          const finalChartData = addData.concat(tempChart);
          console.log("finalChartData", finalChartData);
          setChartData(finalChartData);
    }
      else{
        setActiveRate("No this pair data yet");
        setChartData([]);
      }

    })
     

      console.log("chartdata");
      console.log(timeData);
   
  }, [activeToken0, activeToken1]);

  const getRoutePrice = (token0Address, token1Address) => {
    if(!token0Address || !token1Address) return;    

    axios
      .post(
        `${apiUrlPrefix}/chart/swap?token0=${token0Address}&token1=${token1Address}&range=1D`
      )
      .then(data => {
        console.log(data);
      });
  }


  const lineTitleRender = () => {

    let token0logo = null;
    let token1logo = null;
    for (let j = 0; j < supportedTokens.length; j++) {
      if (activeToken0.symbol === supportedTokens[j].symbol) {
        token0logo = supportedTokens[j].logoURI;
      }
      if (activeToken1.symbol === supportedTokens[j].symbol) {
        token1logo = supportedTokens[j].logoURI;
      }
    }

    const swapTokenPosition = () => {
      const tempSwapToken = activeToken0;
      setActiveToken0(activeToken1);
      setActiveToken1(tempSwapToken);
    }
    

    return [
      <div style={{width: "100%"}}>
        <div className={styles.maintitle}>
          <div className={styles.lighttitle} style={{ display: 'flex', cursor: 'pointer', alignItems: 'center' }} onClick={swapTokenPosition}>
            <img
              src={token0logo}
              alt=""
              style={{ width: 24, maxWidth: '24px', maxHeight: '24px', marginRight: '0.25rem', marginTop: '0.1rem' }}
            />
            <img
              src={token1logo}
              alt=""
              style={{ width: 24, maxHeight: '24px', marginRight: '0.5rem', marginTop: '0.1rem' }}
            />
            <span>
              {activeToken0.symbol}&nbsp;/&nbsp;{activeToken1.symbol}
            </span>

          </div>

        </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div className={styles.secondarytitle}>
            <span className={styles.lighttitle}>{activeRate}</span>{' '}
            <span className={styles.percentage}>{activeAbsoluteChange}</span>
          </div>
          <AcyPeriodTime
            onhandPeriodTimeChoose={onhandPeriodTimeChoose}
            className={styles.pt}
            // times={['1D', '1W', '1M']}
            // times={['24h', 'Max']}
            times={['24h']}

          />
        </div>
      </div>,
    ];
  };

  const selectTime = pt => {
    const dateSwitchFunctions = {
      Line: () => {
        setAlphaTable('Line');
      },
      Bar: () => {
        setAlphaTable('Bar');
      },
    };

    dateSwitchFunctions[pt]();
  };



  // 选择Coin
  const onClickCoin = () => {
    setVisible(true);
  };

  const onCancel = () => {
    setVisible(false);
  };

  const onHandModalConfirmOrder = falg => {
    setVisibleConfirmOrder(!!falg);
  };

  const getTokenSymbol = async (address, library, account) => {
    const tokenContract = getTokenContract(address, library, account);
    return tokenContract.symbol();
  };

  const getTokenDecimal = async (address, library, account) => {
    const tokenContract = getTokenContract(address, library, account);
    return tokenContract.decimals();
  };

  const updateTransactionList = async (receipt) => {
    setTableLoading(true);
    console.log("updating list");
    appendNewSwapTx(refContainer.current,receipt,account,library).then((data) => {
      if(data && data.length > 0) setTransactionList(data);
      setTableLoading(false);
    })
    
  }


  const onGetReceipt = async (receipt, library, account) => {
    console.log('RECEIPT', receipt);
    updateTransactionList(receipt);
  };
  const {
    isMobile,
    transaction: { transactions },
    swap: { token0, token1 },
    dispatch
  } = props;

  const updateActiveChartData = (data, dataIndex) => {
    const prevData = dataIndex === 0 ? 0 : chartData[dataIndex - 1][1];
    const absoluteChange = (dataIndex === 0 ? 0 : data - prevData).toFixed(3);
    const formattedAbsChange = absoluteChange > 0 ? "+" + absoluteChange : absoluteChange;
    setActiveRate(data.toFixed(3));
    setActiveAbsoluteChange(formattedAbsChange);
  }

  useEffect(() => {
    if (!chartData.length)
      return;
    const lastDataIndex = chartData.length-1;
    updateActiveChartData(chartData[lastDataIndex][1], lastDataIndex);
  }, [chartData])
 
  return (
    <PageHeaderWrapper>
      <div className={styles.main}>
        <div className={styles.rowFlexContainer}>
          <div className={`${styles.colItem} ${styles.priceChart}`}>
            <StyledCard title={lineTitleRender()}>
              <div
                style={{
                }}
              >
                <div
                  style={{
                    height: '400px',
                  }}
                  className={styles.showPeriodOnHover}
                >
                  <AcyPriceChart 
                    data={chartData}
                    format={format}
                    showXAxis
                    // showGradient
                    lineColor="#e29227"
                    range={range}
                    showTooltip={true}
                    onHover={(data, dataIndex) => updateActiveChartData(data, dataIndex)}
                  />

                </div>
              </div>
            </StyledCard> 
          </div> 
          <div className={`${styles.colItem} ${styles.perpetualComponent}`} >
            <AcyCard style={{ backgroundColor: '#0e0304', padding: '10px' }}>
              <div className={styles.trade}>
                <PerpetualComponent
                  onSelectToken0={token => {
                    setActiveToken0(token);
                  }}
                  onSelectToken1={token => {
                    setActiveToken1(token);

                  }}
                  onGetReceipt={onGetReceipt}
                />
              </div>
            </AcyCard>
          </div>

        </div>
        <div className={styles.rowFlexContainer}>
              <div className={`${styles.colItem}`}>
                  <a className={`${styles.colItem} ${styles.optionTab}`} onClick={()=>{setShowActionTable(false)}}>Positions</a>
                  <a className={`${styles.colItem} ${styles.optionTab}`} onClick={()=>{setShowActionTable(true)}}>Actions </a>
              </div>
          </div>
        <div className={styles.rowFlexContainer}>
            <div className={`${styles.colItem} ${styles.priceChart}`}>
                <div className={styles.Trade}>
                    {
                      !showActionTable ? 
                        (<PositionsTable
                            isMobile={isMobile}
                            dataSource={positionsData}
                        />) 
                        : 
                        (<ActionHistoryTable
                            isMobile={isMobile}
                            dataSource={positionsData}
                        />)
                    }
                    
                </div>
            </div>
        <div className={styles.exchangeItem}>
        </div>
      </div>
      <AcyModal onCancel={onCancel} width={600} visible={visible}>
        <div className={styles.title}>
          <AcyIcon name="back" /> Select a token
        </div>
        <div className={styles.search}>
          <AcyInput
            placeholder="Enter the token symbol or address"
            suffix={<AcyIcon name="search" />}
          />
        </div>
        <div className={styles.coinList}>
          <AcyTabs>
            <AcyTabPane tab="All" key="1">
              <AcyCoinItem />
              <AcyCoinItem />
              <AcyCoinItem />
              <AcyCoinItem />
            </AcyTabPane>
            <AcyTabPane tab="Favorite" key="2" />
            <AcyTabPane tab="Index" key="3" />
            <AcyTabPane tab="Synth" key="4" />
          </AcyTabs>
        </div>
      </AcyModal>
      <AcyApprove
        onCancel={() => setVisibleLoading(false)}
        visible={visibleLoading}
      />
      
      </div>
    </PageHeaderWrapper>
  );
}
export default connect(({ profile, transaction, swap, loading }) => ({
  profile,
  transaction,
  swap,
  loading: loading.effects['profile/fetchBasic'],
}))(props => (
  <Media query="(max-width: 599px)">
    {isMobile => <Swap {...props} isMobile={isMobile} />}
  </Media>
))
