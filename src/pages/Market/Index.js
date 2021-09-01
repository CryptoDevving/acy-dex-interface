import React, { Component } from 'react'
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Table,  Row, Col,Input} from 'antd';
import styles from './styles.less';
import moment from 'moment'
import {
    AcyCard,
    AcyIcon,
    AcyPeriodTime,
    AcyTabs,
    AcyCuarrencyCard,
    AcyConnectWalletBig,
    AcyModal,
    AcyInput,
    AcyCoinItem,
    AcyLineChart,
    AcyBarChart,
    AcyConfirm,
    AcyApprove,
  } from '@/components/Acy';

const {Search} = Input

const TransactionType = {
    SWAP: "Swap",
    ADD: "Add",
    REMOVE: "Remove"
}

function abbrHash(hash){
  let len = hash.length
  let first = hash.slice(0, 6)
  let last = hash.slice(len - 4, len - 1)

  return first + "..." + last
}

function abbrNumber(number){
    const THOUSAND = 0
    const MILLION = 1

    let currentDivision = -1
    let result = ""
    let tempNumber = number

    if (number >= 1000){
        tempNumber /= 1000
        currentDivision = 0
    }
        
    if (number>= 1000000){
        tempNumber /= 1000 
        currentDivision = 1
    }

    switch (currentDivision) {
        case 0:
            result = `${tempNumber.toFixed(2)}k`
            break;
        case 1:
            result = `${tempNumber.toFixed(2)}m`
            break;
        default:
            result = `${number.toFixed(2)}`
            break;
      }
        
    return result
    
}

const dataSource = [
    {
      "name": "Ether",
      "short": "ETH",
      "price": 3170,
      "priceChange": -0.79,
      "volume24h": 804110000,
      "tvl": 899640000
    },
    {
      "name": "USD Coin",
      "short": "USDC",
      "price": 1,
      "priceChange": 0,
      "volume24h": 741750000,
      "tvl": 547500000
    },
    {
      "name": "Wrapped BTC",
      "short": "WBTC",
      "price": 47960,
      "priceChange": -0.88,
      "volume24h": 47960000,
      "tvl": 220550000
    },
    {
      "name": "Tether USD",
      "short": "USDT",
      "price": 1,
      "priceChange": 0,
      "volume24h": 210430000,
      "tvl": 217030000
    },
    {
      "name": "Ether",
      "short": "ETH",
      "price": 3170,
      "priceChange": -0.79,
      "volume24h": 804110000,
      "tvl": 899640000
    },
    {
      "name": "USD Coin",
      "short": "USDC",
      "price": 1,
      "priceChange": 0,
      "volume24h": 741750000,
      "tvl": 547500000
    },
    {
      "name": "Wrapped BTC",
      "short": "WBTC",
      "price": 47960,
      "priceChange": -0.88,
      "volume24h": 47960000,
      "tvl": 220550000
    },
    {
      "name": "Tether USD",
      "short": "USDT",
      "price": 1,
      "priceChange": 0,
      "volume24h": 210430000,
      "tvl": 217030000
    },
    {
      "name": "Ether",
      "short": "ETH",
      "price": 3170,
      "priceChange": -0.79,
      "volume24h": 804110000,
      "tvl": 899640000
    },
    {
      "name": "USD Coin",
      "short": "USDC",
      "price": 1,
      "priceChange": 0,
      "volume24h": 741750000,
      "tvl": 547500000
    },
    {
      "name": "Wrapped BTC",
      "short": "WBTC",
      "price": 47960,
      "priceChange": -0.88,
      "volume24h": 47960000,
      "tvl": 220550000
    },
    {
      "name": "Tether USD",
      "short": "USDT",
      "price": 1,
      "priceChange": 0,
      "volume24h": 210430000,
      "tvl": 217030000
    },
    {
      "name": "Ether",
      "short": "ETH",
      "price": 3170,
      "priceChange": -0.79,
      "volume24h": 804110000,
      "tvl": 899640000
    },
    {
      "name": "USD Coin",
      "short": "USDC",
      "price": 1,
      "priceChange": 0,
      "volume24h": 741750000,
      "tvl": 547500000
    },
    {
      "name": "Wrapped BTC",
      "short": "WBTC",
      "price": 47960,
      "priceChange": -0.88,
      "volume24h": 47960000,
      "tvl": 220550000
    },
    {
      "name": "Tether USD",
      "short": "USDT",
      "price": 1,
      "priceChange": 0,
      "volume24h": 210430000,
      "tvl": 217030000
    },
    {
      "name": "Ether",
      "short": "ETH",
      "price": 3170,
      "priceChange": -0.79,
      "volume24h": 804110000,
      "tvl": 899640000
    },
    {
      "name": "USD Coin",
      "short": "USDC",
      "price": 1,
      "priceChange": 0,
      "volume24h": 741750000,
      "tvl": 547500000
    },
    {
      "name": "Wrapped BTC",
      "short": "WBTC",
      "price": 47960,
      "priceChange": -0.88,
      "volume24h": 47960000,
      "tvl": 220550000
    },
    {
      "name": "Tether USD",
      "short": "USDT",
      "price": 1,
      "priceChange": 0,
      "volume24h": 210430000,
      "tvl": 217030000
    }
  ]

const dataSourcePool = [
    {
        coin1:"USDC",
        coin2:"ETH",
        tvl: 370900000,
        volume24h: 68680000,
        volume7d:667220000
    },
    {
        coin1:"WBTC",
        coin2:"ETH",
        tvl: 370900000,
        volume24h: 68680000,
        volume7d:667220000
    },
    {
        coin1:"USDC",
        coin2:"ETH",
        tvl: 370900000,
        volume24h: 68680000,
        volume7d:667220000
    },
    {
        coin1:"WBTC",
        coin2:"ETH",
        tvl: 370900000,
        volume24h: 68680000,
        volume7d:667220000
    },
    {
        coin1:"USDC",
        coin2:"ETH",
        tvl: 370900000,
        volume24h: 68680000,
        volume7d:667220000
    },
    {
        coin1:"WBTC",
        coin2:"ETH",
        tvl: 370900000,
        volume24h: 68680000,
        volume7d:667220000
    },
    {
        coin1:"USDC",
        coin2:"ETH",
        tvl: 370900000,
        volume24h: 68680000,
        volume7d:667220000
    },
    {
        coin1:"WBTC",
        coin2:"ETH",
        tvl: 370900000,
        volume24h: 68680000,
        volume7d:667220000
    },
    {
        coin1:"USDC",
        coin2:"ETH",
        tvl: 370900000,
        volume24h: 68680000,
        volume7d:667220000
    },
    {
        coin1:"WBTC",
        coin2:"ETH",
        tvl: 370900000,
        volume24h: 68680000,
        volume7d:667220000
    },
    {
        coin1:"USDC",
        coin2:"ETH",
        tvl: 370900000,
        volume24h: 68680000,
        volume7d:667220000
    },
    {
        coin1:"WBTC",
        coin2:"ETH",
        tvl: 370900000,
        volume24h: 68680000,
        volume7d:667220000
    }
]

const dataSourceTransaction = [
    {
      "coin1": "ETH",
      "coin2": "WBTC",
      "type": TransactionType.SWAP,
      "totalValue": 47161258.74,
      "coin1Amount": 85.87749323,
      "coin2Amount": 54.80565495,
      "account": "0x8e4806c17347a9fc6f52b25e73c5e772973b4e3605ddc3cea30742ec8c53d13f",
      "time": "2021-09-01T04:02:39Z"
    },
    {
      "coin1": "ETH",
      "coin2": "USDC",
      "type": TransactionType.ADD,
      "totalValue": 4474529.957,
      "coin1Amount": 49.6015762,
      "coin2Amount": 43.15266777,
      "account": "0x8e4806c17347a9fc6f52b25e73c5e772973b4e3605ddc3cea30742ec8c53d13f",
      "time": "2021-09-01T04:02:39Z"
    },
    {
      "coin1": "USDC",
      "coin2": "WBTC",
      "type": TransactionType.REMOVE,
      "totalValue": 16327816.91,
      "coin1Amount": 84.65384009,
      "coin2Amount": 93.41124956,
      "account": "0x8e4806c17347a9fc6f52b25e73c5e772973b4e3605ddc3cea30742ec8c53d13f",
      "time": "2021-09-01T04:02:39Z"
    },
    {
      "coin1": "USDC",
      "coin2": "ETH",
      "type": TransactionType.SWAP,
      "totalValue": 87309303.84,
      "coin1Amount": 14.83691711,
      "coin2Amount": 39.48470716,
      "account": "0x8e4806c17347a9fc6f52b25e73c5e772973b4e3605ddc3cea30742ec8c53d13f",
      "time": "2021-09-01T04:02:39Z"
    },
    {
      "coin1": "ETH",
      "coin2": "WBTC",
      "type": TransactionType.ADD,
      "totalValue": 99005732.19,
      "coin1Amount": 29.01098914,
      "coin2Amount": 87.67634172,
      "account": "0x8e4806c17347a9fc6f52b25e73c5e772973b4e3605ddc3cea30742ec8c53d13f",
      "time": "2021-09-01T04:02:39Z"
    },
    {
      "coin1": "ETH",
      "coin2": "USDC",
      "type": TransactionType.REMOVE,
      "totalValue": 7473159.335,
      "coin1Amount": 55.39709945,
      "coin2Amount": 81.03417077,
      "account": "0x8e4806c17347a9fc6f52b25e73c5e772973b4e3605ddc3cea30742ec8c53d13f",
      "time": "2021-09-01T04:02:39Z"
    },
    {
      "coin1": "USDC",
      "coin2": "WBTC",
      "type": TransactionType.SWAP,
      "totalValue": 5613827.965,
      "coin1Amount": 70.82938395,
      "coin2Amount": 62.49065479,
      "account": "0x8e4806c17347a9fc6f52b25e73c5e772973b4e3605ddc3cea30742ec8c53d13f",
      "time": "2021-09-01T04:02:39Z"
    },
    {
      "coin1": "USDC",
      "coin2": "ETH",
      "type": TransactionType.ADD,
      "totalValue": 15457824.56,
      "coin1Amount": 53.76396751,
      "coin2Amount": 97.18653896,
      "account": "0x8e4806c17347a9fc6f52b25e73c5e772973b4e3605ddc3cea30742ec8c53d13f",
      "time": "2021-09-01T04:02:39Z"
    },
    {
      "coin1": "ETH",
      "coin2": "WBTC",
      "type": TransactionType.REMOVE,
      "totalValue": 76920106.68,
      "coin1Amount": 99.747006,
      "coin2Amount": 79.16787602,
      "account": "0x8e4806c17347a9fc6f52b25e73c5e772973b4e3605ddc3cea30742ec8c53d13f",
      "time": "2021-09-01T04:02:39Z"
    },
    {
      "coin1": "ETH",
      "coin2": "USDC",
      "type": TransactionType.SWAP,
      "totalValue": 29714083.38,
      "coin1Amount": 14.14255762,
      "coin2Amount": 1.538641803,
      "account": "0x8e4806c17347a9fc6f52b25e73c5e772973b4e3605ddc3cea30742ec8c53d13f",
      "time": "2021-09-01T04:02:39Z"
    },
    {
      "coin1": "USDC",
      "coin2": "WBTC",
      "type": TransactionType.ADD,
      "totalValue": 27964831.48,
      "coin1Amount": 22.24316101,
      "coin2Amount": 1.411491578,
      "account": "0x8e4806c17347a9fc6f52b25e73c5e772973b4e3605ddc3cea30742ec8c53d13f",
      "time": "2021-09-01T04:02:39Z"
    },
    {
      "coin1": "USDC",
      "coin2": "ETH",
      "type": TransactionType.REMOVE,
      "totalValue": 61016077.45,
      "coin1Amount": 54.64088962,
      "coin2Amount": 70.79323119,
      "account": "0x8e4806c17347a9fc6f52b25e73c5e772973b4e3605ddc3cea30742ec8c53d13f",
      "time": "2021-09-01T04:02:39Z"
    },
    {
      "coin1": "ETH",
      "coin2": "WBTC",
      "type": TransactionType.SWAP,
      "totalValue": 15447008.9,
      "coin1Amount": 85.32625649,
      "coin2Amount": 95.80244682,
      "account": "0x8e4806c17347a9fc6f52b25e73c5e772973b4e3605ddc3cea30742ec8c53d13f",
      "time": "2021-09-01T04:02:39Z"
    },
    {
      "coin1": "ETH",
      "coin2": "USDC",
      "type": TransactionType.ADD,
      "totalValue": 51389385.09,
      "coin1Amount": 45.10863203,
      "coin2Amount": 14.45977451,
      "account": "0x8e4806c17347a9fc6f52b25e73c5e772973b4e3605ddc3cea30742ec8c53d13f",
      "time": "2021-09-01T04:02:39Z"
    },
    {
      "coin1": "USDC",
      "coin2": "WBTC",
      "type": TransactionType.REMOVE,
      "totalValue": 62947249.33,
      "coin1Amount": 32.81104431,
      "coin2Amount": 18.84867075,
      "account": "0x8e4806c17347a9fc6f52b25e73c5e772973b4e3605ddc3cea30742ec8c53d13f",
      "time": "2021-09-01T04:02:39Z"
    },
    {
      "coin1": "USDC",
      "coin2": "ETH",
      "type": TransactionType.SWAP,
      "totalValue": 83789531.87,
      "coin1Amount": 55.22081984,
      "coin2Amount": 15.7711983,
      "account": "0x8e4806c17347a9fc6f52b25e73c5e772973b4e3605ddc3cea30742ec8c53d13f",
      "time": "2021-09-01T04:02:39Z"
    },
    {
      "coin1": "ETH",
      "coin2": "WBTC",
      "type": TransactionType.ADD,
      "totalValue": 88422526.24,
      "coin1Amount": 78.28128104,
      "coin2Amount": 88.20335576,
      "account": "0x8e4806c17347a9fc6f52b25e73c5e772973b4e3605ddc3cea30742ec8c53d13f",
      "time": "2021-09-01T04:02:39Z"
    },
    {
      "coin1": "ETH",
      "coin2": "USDC",
      "type": TransactionType.REMOVE,
      "totalValue": 95835971.82,
      "coin1Amount": 9.532991159,
      "coin2Amount": 40.64787591,
      "account": "0x8e4806c17347a9fc6f52b25e73c5e772973b4e3605ddc3cea30742ec8c53d13f",
      "time": "2021-09-01T04:02:39Z"
    },
    {
      "coin1": "USDC",
      "coin2": "WBTC",
      "type": TransactionType.SWAP,
      "totalValue": 57385063.19,
      "coin1Amount": 63.52037022,
      "coin2Amount": 93.65125987,
      "account": "0x8e4806c17347a9fc6f52b25e73c5e772973b4e3605ddc3cea30742ec8c53d13f",
      "time": "2021-09-01T04:02:39Z"
    }
  ]

var data = [
    ['2000-06-05', 116],
    ['2000-06-06', 129],
    ['2000-06-07', 135],
    ['2000-06-08', 86],
    ['2000-06-09', 73],
    ['2000-06-10', 85],
    ['2000-06-11', 73],
    ['2000-06-12', 68],
    ['2000-06-13', 92],
    ['2000-06-14', 130],
    ['2000-06-15', 245],
    ['2000-06-16', 139],
    ['2000-06-17', 115],
    ['2000-06-18', 111],
    ['2000-06-19', 309],
    ['2000-06-20', 206],
    ['2000-06-21', 137],
    ['2000-06-22', 1000],
    ['2000-06-23', 85],
    ['2000-06-24', 94],
    ['2000-06-25', 71],
    ['2000-06-26', 106],
    ['2000-06-27', 84],
    ['2000-06-28', 93],
    ['2000-06-29', 85],
    ['2000-06-30', 73],
    ['2000-07-01', 83],
    ['2000-07-02', 125],
    ['2000-07-03', 107],
    ['2000-07-04', 82],
    ['2000-07-05', 44],
    ['2000-07-06', 72],
    ['2000-07-07', 106],
    ['2000-07-08', 107],
    ['2000-07-09', 66],
    ['2000-07-10', 91],
    ['2000-07-11', 92],
    ['2000-07-12', 113],
    ['2000-07-13', 107],
    ['2000-07-14', 131],
    ['2000-07-15', 111],
    ['2000-07-16', 64],
    ['2000-07-17', 69],
    ['2000-07-18', 88],
    ['2000-07-19', 77],
    ['2000-07-20', 83],
    ['2000-07-21', 111],
    ['2000-07-22', 57],
    ['2000-07-23', 55],
    ['2000-07-24', 60],
  ];
  

const columnsCoin = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render:(text, record) => {
            return (
                <div className={styles.firstColumn}>
                    <AcyIcon name={record.short.toLowerCase()} width={20} height={20}/>
                    <span className={styles.coinName}>{record.name}</span>
                    <span className={styles.coinShort}> / {record.short}</span>
                </div>
            )
        }
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render:(text, record) => {
            return (
                <div className={styles.tableData}>
                    $ {abbrNumber(text)}
                </div>
            )
        }
    },
    {
        title: 'Price Change',
        dataIndex: 'priceChange',
        key: 'priceChange',
        render: (priceChange) => {
            return (
                <span className={priceChange <  0 ? styles.priceChangeDown : styles.priceChangeUp}>{priceChange.toFixed(2)}</span>
            ) 
        }
    },
    {
        title: 'Volume 24H',
        dataIndex: 'volume24h',
        key: 'volume24h',
        render:(text, record) => {
            return (
                <div className={styles.tableData}>
                    $ {abbrNumber(text)}
                </div>
            )
        }
    },
    {
        title: 'TVL',
        dataIndex: 'tvl',
        key: 'tvl',
        render:(text, record) => {
            return (
                <div className={styles.tableData}>
                    $ {abbrNumber(text)}
                </div>
            )
        }
    }
];

const columnsPool = [
    {
        title: 'Pool',
        dataIndex: 'pool',
        key: 'pool',
        render:(text, record) => {
            return (
                <div className={styles.tableData}>
                    <AcyIcon name={record.coin1.toLowerCase()} width={20} height={20}/>
                    <AcyIcon name={record.coin2.toLowerCase()} width={20} height={20}/>
                    <span className={styles.coinName}>{record.coin1}/{record.coin2}</span>
                </div>
            )
        }
    },
    {
        title: 'TVL',
        dataIndex: 'tvl',
        key: 'tvl',
        render:(text, record) => {
            return (
                <div className={styles.tableData}>
                    $ {abbrNumber(record.tvl)}
                </div>
            )
        }
    },
    {
        title: 'Volume 24H',
        dataIndex: 'volume24h',
        key: 'volume24h',
        render:(text, record) => {
            return (
                <div className={styles.tableData}>
                    $ {abbrNumber(record.volume24h)}
                </div>
            )
        }
    },
    {
        title: 'Volume 7D',
        dataIndex: 'volume7d',
        key: 'volume7d',
        render:(text, record) => {
            return (
                <div className={styles.tableData}>
                    $ {abbrNumber(record.volume7d)}
                </div>
            )
        }
    },
]

let columnsTransaction = [
  {
    title: '',
    dataIndex: '',
    key: 'transactionName',
    render:(text, record) => {

        return (
            <div className={styles.tableData}>
                {record.type} {record.coin1} {
                  record.type == TransactionType.SWAP ? "for" : "and"
                } {record.coin1}
            </div>
        )
    }
  },
  {
    title: 'Total Value',
    dataIndex: 'totalValue',
    key: 'totalValue',
    render:(text, record) => {
      return (
          <div className={styles.tableData}>
              $ {abbrNumber(record.totalValue)}
          </div>
      )
    }
  },
  {
    title: 'Token Amount',
    dataIndex: 'coin1Amount',
    key: 'coin1Amount',
    render:(text, record) => {
      return (
          <div className={styles.tableData}>
              {abbrNumber(record.coin1Amount)} {record.coin1}
          </div>
      )
    }
  },
  {
    title: 'Token Amount',
    dataIndex: 'coin2Amount',
    key: 'coin2Amount',
    render:(text, record) => {
      return (
          <div className={styles.tableData}>
              {abbrNumber(record.coin2Amount)} {record.coin2}
          </div>
      )
    }
  },
  {
    title: 'Account',
    dataIndex: 'account',
    key: 'account',
    render:(text, record) => {
      return (
          <div className={styles.tableData} style={{textOverflow:"ellipsis"}}>
              {abbrHash(text)}
          </div>
      )
    }
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
    render:(text, record) => {

      function getRelTime(timeString){
        let a = moment(new Date(timeString))  
        return a.fromNow()
      }


      return (
          
          <div className={styles.tableData} >
              {getRelTime(text)}
          </div>
      )
    }
  },

]

export class BasicProfile extends Component {
    state = {
        visible: true,
        visibleSearchBar: false,
        visibleConfirmOrder: false,
        visibleLoading: false,
        tabIndex: 0,
      };
    componentDidMount() {}
    onSearchFocus = () => {
       this.setState({
           visibleSearchBar:true
       })
    }
    onSearchBlur = ()=> {
        this.setState({
            visibleSearchBar:false
        })
    }
    render() {
        const { visible, visibleSearchBar, visibleConfirmOrder, visibleLoading, tabIndex,maxLine } = this.state;
        return (
            <PageHeaderWrapper>
                <div className={styles.marketRoot}>
                    <div className={styles.searchSection} style={{"marginBottom": "10px"}}>
                        <Input 
                            placeholder="Search" 
                            size="large"
                            style={{
                                backgroundColor: "#373739",
                            }}
                            onFocus={this.onSearchFocus}
                            onBlur={this.onSearchBlur}
                        />
                    </div>
                    <div className={styles.charts}>
                        <div className={styles.chartSection}>
                              <div className={styles.graphStats}>
                                  <div className={styles.statName}>TVL</div>
                                  <div className={styles.statValue}>$2.19b</div>
                              </div>
                              <div className={styles.chartWrapper}>
                                  <AcyLineChart backData={data}/>
                              </div>
                              
                        </div>
                        <div className={styles.chartSection}>
                                <div className={styles.graphStats}>
                                    <div className={styles.statName}>VOLUME 24H</div>
                                    <div className={styles.statValue}>$2.19b</div>
                                </div>
                                <div className={styles.chartWrapper}>
                                    <AcyBarChart backData={data}/>
                                </div>
                                
                        </div> 
                    </div>
                    <Row className={styles.marketOverview} justify="space-around">
                        <Col span={8} >Volume 24H   <strong>$882.20m</strong> <span className={styles.priceChangeUp}>0.36%</span></Col>
                        <Col span={8} >Fees 24H <strong>$1.66m </strong>    <span className={styles.priceChangeUp}>0.36%</span></Col>
                        <Col span={8} >TVL  <strong>$2.90b</strong>  <span className={styles.priceChangeDown}>-0.36%</span></Col>
                    </Row>

                    <h2>Top Coins</h2>
                    <Table dataSource={dataSource} columns={columnsCoin} footer={() => (<></>)}/>

                    <h2>Top Pools</h2>
                    <Table dataSource={dataSourcePool} columns={columnsPool} footer={() => (<></>)}/>

                    <h2>Transactions</h2>
                    <Table dataSource={dataSourceTransaction} columns={columnsTransaction} footer={() => (<></>)}/>
                </div>
            </PageHeaderWrapper>
        )
    }
}

export default BasicProfile
