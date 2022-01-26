/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Progress, Button, Table, Input, Tooltip, Icon, Alert } from 'antd';
import { history } from 'umi';
import styles from "./styles.less"
import LaunchChart from './launchChart';
import { getTransferData } from '@/acy-dex-swap/core/launchPad';
import { requireAllocation, getAllocationInfo, getProjectInfo, useAllocation } from '@/services/api';
import { BigNumber } from '@ethersproject/bignumber';
import ERC20ABI from '@/abis/ERC20.json';
import { binance, injected } from '@/connectors';
import { Web3Provider, JsonRpcProvider } from "@ethersproject/providers";
import './css/LaunchpadProject.css';
import project from '@/models/project';
import AllocationIcon from './components/AllocationIcon';
import * as moment from 'moment';
import context from 'react-bootstrap/esm/AccordionContext';
import { CaretDownOutlined } from '@ant-design/icons';
import VestingSchedule from './VestingSchedule';
import SocialMedia from './SocialMedia'
import telegramWIcon from '@/assets/icon_telegram_white.svg';
import etherIcon from '@/assets/icon_etherscan.svg';
import polyIcon from '@/assets/icon_polyscan.svg';
import bscIcon from '@/assets/icon_bscscan.svg';
import bscChainIcon from '@/assets/icon_bsc.svg';
import polygonIcon from '@/assets/icon_polygon.svg';
import linkedinIcon from '@/assets/icon_linkedin.svg';
import mediumIcon from '@/assets/icon_medium.svg';
import youtubeIcon from '@/assets/icon_youtube.svg';
import githubIcon from '@/assets/icon_github.svg';
import twitterWIcon from '@/assets/icon_twitter_white.svg';
import linkWIcon from '@/assets/icon_link_white.svg';
import whitepaperIcon from '@/assets/icon_file_white.svg';
import deckIcon from '@/assets/icon_ppt.svg';
import tokenEconomicsIcon from '@/assets/icon_googlesheets.svg';
import paycerBanner from '@/assets/paycer_banner.svg';
import PaycerIcon from '@/assets/icon_paycer_logo.svg';
import { findTokenWithSymbol } from '@/utils/txData';
import $ from 'jquery';
import { getContract } from "../../acy-dex-swap/utils/index.js"
import { useWeb3React } from '@web3-react/core';
import { useConnectWallet } from "@/components/ConnectWallet";
import POOLABI from "@/acy-dex-swap/abis/AcyV1Poolz.json";

import { useConstantLoader, LAUNCHPAD_ADDRESS, LAUNCH_RPC_URL, CHAINID, API_URL, TOKEN_LIST, MARKET_TOKEN_LIST } from "@/constants";

import { CustomError } from "@/acy-dex-swap/utils"
import { approveNew, getAllowance } from "@/acy-dex-swap/utils"

const LaunchpadProject = () => {
    // STATES
    const { account, chainId, library, activate, active } = useWeb3React();
    const { projectId } = useParams();
    const [receivedData, setReceivedData] = useState({});
    const [mainCoinLogoURI, setMainCoinLogoURI] = useState(null);
    const [poolID, setPoolID] = useState(null);
    const [poolBaseData, setPoolBaseData] = useState(null);
    // const [poolDistributionDate, setDistributionDate] = useState([]);
    // const [poolDistributionStage, setpoolDistributionStage] = useState([]);
    // const [poolStageCount, setpoolStageCount] = useState(0);
    // const [poolStatus, setPoolStatus] = useState(0);
    // const [poolTokenDecimals, setPoolTokenDecimals] = useState(0);
    // const [poolMainCoinDecimals, setPoolMainCoinDecimals] = useState(0); // Gary: decimal initialize to 0
    // const [poolMainCoinAddress, setPoolMainCoinAddress] = useState(0); // e.g., USDT
    // const [poolMainCoinLogoURL, setPoolMainCoinLogoURL] = useState(null);
    // const [poolMainCoinName, setPoolMainCoinName] = useState(null);
    // const [isError, setIsError] = useState(false);
    // const [allocationInfo, setAllocationInfo] = useState({});
    // const [hasCollected, setHasCollected] = useState(false);
    // const [successCollect, setSuccessCollect] = useState(false);
    // const [notVesting, setNotVesting] = useState(false);
    // const [isVesting, setIsVesting] = useState(false);
    // const [isNotInvesting, setIsNotInvesting] = useState(false);
    // const [compareAlloDate, setCompareAlloDate] = useState(false);
    // const [comparesaleDate, setComparesaleDate] = useState(false);
    // const [comparevestDate, setComparevestDate] = useState(false);
    // const [isClickedVesting, setIsClickedVesting] = useState(false);
    // const [isClickedMax, setIsClickedMax] = useState(false);
    // const [investorNum,setinvestorNum] = useState(0);
    // const [isInvesting, setIsInvesting] = useState(false);

    // CONSTANTS
    const InputGroup = Input.Group;
    const logoObj = {
        "Telegram": telegramWIcon,
        "Twitter": twitterWIcon,
        "Website": linkWIcon,
        "Whitepaper": whitepaperIcon,
        "Deck": deckIcon,
        "Linkedin": linkedinIcon,
        "Medium": mediumIcon,
        "TokenEconomics": tokenEconomicsIcon,
        "Youtube": youtubeIcon,
        "Github": githubIcon,
        "Etheraddress": etherIcon,
        "Polyaddress": polyIcon,
        "Bscaddress": bscIcon
    }
    const PoolContract = getContract(LAUNCHPAD_ADDRESS(), POOLABI, library, account);


    // FUNCTIONS
    // const connectWallet = async () => {
    //     activate(binance);
    //     activate(injected);
    // };

    const clickToWebsite = () => {
        const newWindow = window.open(receivedData.social[0].Website, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }

    const formatTime = timeZone => {
        return moment(timeZone)
            .local()
            .format('MM/DD/YYYY HH:mm:ss');
    };

    const convertUnixTime = unixTime => {
        const data = new Date((Number(unixTime)) * 1000)
        const res = data.toLocaleString()
        return res
    }

    // contract function
    // const getPoolData = async (lib, acc) => {
    //     const poolContract = getContract(LAUNCHPAD_ADDRESS(), POOLABI, lib, acc);
    //     const pool = []
    //     const distributionRes = []
    //     const distributionStage = []

    //     // 合约函数调用
    //     const baseData = await poolContract.GetPoolBaseData(poolID)
    //     const distributionData = await poolContract.GetPoolDistributionData(poolID)
    //     const status = await poolContract.GetPoolStatus(poolID)

    //     // getpoolbasedata 数据解析
    //     const token2Address = baseData[1]
    //     const tokenList = TOKEN_LIST()
    //     const token2Info = tokenList.find(item => item.address == token2Address)

    //     const token1contract = getContract(baseData[0], ERC20ABI, lib, acc)
    //     const token2contract = getContract(token2Address, ERC20ABI, lib, acc)

    //     const token1decimal = await token1contract.decimals()
    //     const token2decimal = await token2contract.decimals()
    //     // 不解析时间戳
    //     const res1 = BigNumber.from(baseData[2]).toBigInt().toString().slice(0, -(token1decimal)) // 获取销售的token的总数
    //     const res2 = BigNumber.from(baseData[3]).toBigInt().toString().slice(0, -(token1decimal)) // 已销售的token的数量
    //     const res3 = BigNumber.from(baseData[4]).toBigInt()
    //     const res4 = BigNumber.from(baseData[5]).toBigInt()

    //     // 获取当前阶段
    //     const d = Math.round(new Date().getTime() / 1000)
    //     if (d > res3) setComparesaleDate(true)
    //     if (d > res4) setComparevestDate(true)
    //     const saleStartDate = convertUnixTime(res3)
    //     const saleEndDate = convertUnixTime(res4)
    //     // 存放数据
    //     pool.push(res1, res2, saleStartDate, saleEndDate)
    //     // getpooldistributiondata 数据解析以及存放
    //     distributionData[1].map(uTime => distributionRes.push(convertUnixTime(uTime)))
    //     distributionData[2].map(vestingRate => distributionStage.push(BigNumber.from(vestingRate).toBigInt().toString()))

    //     // 判断当前是否是vesting阶段
    //     const curPoolStatus = Number(BigNumber.from(status).toBigInt())
    //     if (curPoolStatus === 4) setIsVesting(true)

    //     // set数据
    //     setPoolBaseData(pool)
    //     setDistributionDate(distributionRes)
    //     setpoolStageCount(Number(BigNumber.from(distributionData[0]).toBigInt())) // vesting阶段的次数
    //     setpoolDistributionStage(distributionStage)
    //     setPoolStatus(curPoolStatus)
    //     setPoolStatus(Number(BigNumber.from(status).toBigInt()))
    //     setPoolMainCoinAddress(token2Address)
    //     setPoolTokenDecimals(token1decimal)
    //     setPoolMainCoinDecimals(token2decimal)
    //     // setMainCoinLogoURI(token2Info.logoURI)
    //     console.log(token2Address)
    // }

    // HOOKS
    // Retrieve project data from db
    useEffect(() => {
        getProjectInfo(API_URL(), projectId)
            .then(res => {
                if (res) {
                    // extract data from string
                    console.log("fecthing project info ------------111", res.contextData)
                    const contextData = JSON.parse(res.contextData);

                    res['tokenLabels'] = contextData['tokenLabels'];
                    res['projectDescription'] = contextData['projectDescription'];
                    // res['alreadySale'] = contextData['alreadySale'];
                    // res['salePercentage'] = contextData['salePercentage'];
                    res['posterUrl'] = contextData['posterUrl'];
                    res['tokenLogoUrl'] = res.basicInfo.projectTokenUrl;

                    // res['regStart'] = formatTime(res.scheduleInfo.regStart);
                    // res['regEnd'] = formatTime(res.scheduleInfo.regEnd);
                    // res['saleStart'] = formatTime(res.scheduleInfo.saleStart);
                    // res['saleEnd'] = formatTime(res.scheduleInfo.saleEnd);

                    res['tokenPrice'] = res.saleInfo.tokenPrice
                    res['totalSale'] = res.saleInfo.totalSale;
                    res['totalRaise'] = res.saleInfo.totalRaise;
                    res['projectUrl'] = res.saleInfo.projectUrl;
                    res['projectName'] = res.basicInfo.projectName;
                    res['projectToken'] = res.basicInfo.projectToken;
                    res['mainCoin'] = res.basicInfo.mainCoin



                    // get state to hide graph and table
                    // const curT = new Date()
                    // if (curT < res.scheduleInfo.saleStart) setCompareAlloDate(true)
                    const mainCoinInfo = TOKEN_LIST().find(item => item.symbol == res.basicInfo.mainCoin)
                    setMainCoinLogoURI(mainCoinInfo.logoURI);
                    setPoolID(res.basicInfo.poolID);
                    setReceivedData(res);
                } else {
                    console.log('redirect to list page');
                    history.push('/launchpad');
                }
            })
            .catch(e => {
                console.log("Project Detail check errrrrrrrrrrr", e);
                // console.error(e);
                history.push('/launchpad');
            });
    }, [library, account]);

    // // fetching data from Smart Contract
    // useEffect(async () => {
    //     if (!account) {
    //         connectWallet();
    //     }

    //     // project must have poolID
    //     if (!poolID) return;

    //     if (account && library) {
    //         getPoolData(library, account)
    //     } else {
    //         const provider = new JsonRpcProvider(LAUNCH_RPC_URL(), CHAINID());  // different RPC for mainnet
    //         const accnt = "0x0000000000000000000000000000000000000000";
    //         // await getPoolData(provider, accnt)
    //     }
    // }, [library, account, poolID])


    // COMPONENTS
    const TokenBanner = ({ posterUrl }) => {
        return (
            <img
                className="tokenBanner"
                src={posterUrl}
                alt=""
            />
        );
    };

    const TokenLogoLabel = ({ projectName, tokenLogo }) => {
        return (
            <div className="flexContainer">
                <img
                    className="tokenLogo"
                    alt=""
                    src={tokenLogo}
                    loading="eager"
                    onClick={() => clickToWebsite()}
                />
                <div className="tokenInfo">
                    <span className="tokenTitle" onClick={() => clickToWebsite()}>{projectName}</span>
                    <div className="tokenLabelBar">
                        {receivedData.tokenLabels &&
                            receivedData.tokenLabels.map((label) => {
                                if (label === "BSC") return (
                                    <span className="tokenLabel">
                                        <img src={bscChainIcon} alt="" style={{ width: '13px', height: '13px', marginRight: '0.2rem' }} />
                                        BSC
                                    </span>
                                )
                                if (label === "Polygon") return (
                                    <span className="tokenLabel">
                                        <img src={polygonIcon} alt="" style={{ width: '15px', height: '15px', marginRight: '0.2rem' }} />
                                        Polygon
                                    </span>
                                )
                                return <span className="tokenLabel">{label}</span>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    };

    const TokenProcedure = () => {
        const Procedure = () => {
            return (
                <div className="cardContent">
                    <div className="procedure">
                        <hr aria-orientation="vertical" className="verticalDivideLine" />
                        <div className="procedureNumber">1</div>
                        <div>
                            <p>Allocation</p>
                        </div>
                    </div>

                    <div className="procedure" style={{ marginTop: '24px' }}>
                        <hr
                            aria-orientation="vertical"
                            className={'verticalDivideLine_NotActive'}
                        />
                        <div className={'procedureNumber_NotActive'}>
                            2
                        </div>

                        <div>
                            <p>Sale (FCFS)</p>
                            <div>
                                <p className="shortText">From :</p>
                                <p className="shortText">To : </p>
                            </div>
                        </div>

                    </div>

                    <div className="procedure" style={{ marginTop: '24px' }}>
                        <div className={'procedureNumber_NotActive'}>
                            3
                        </div>
                        <div>
                            <p>Vesting</p>
                        </div>
                    </div>
                </div>
            );
        };

    };
    const KeyInformation = ({ projectToken, totalSale, tokenPrice }) => {
        return (
            <div className="circleBorderCard cardContent">
                <div className="keyinfoRow">
                    <div className="keyinfoName">Total Sales</div>
                    <div>
                        {/* {totalSale} {projectToken} */}
                    </div>
                </div>

                <div className="keyinfoRow" style={{ marginTop: '1rem' }}>
                    <div className="keyinfoName">Total Raise</div>
                    <div>
                        {/* {receivedData.totalRaise} {receivedData.mainCoin} */}
                    </div>
                </div>

                <div className="keyinfoRow" style={{ marginTop: '1rem' }}>
                    <div className="keyinfoName">Rate</div>
                    <div>
                        {/* 1 {projectToken} = {tokenPrice} {receivedData.mainCoin} */}
                    </div>
                </div>
            </div>
        );
    };

    const ProjectDescription = () => {
        return (
            <div className="circleBorderCard cardContent">
                <div style={{ display: 'block' }}>
                    <div className='projecttitle-socials-container'>
                        <h3 className='projecttitle'>Project Description</h3>
                    </div>

                    <span className="lineSeperator" />
                    <div className="projectDescription">
                        <div className='socialmedia-container'>
                            {
                                receivedData.social && receivedData.social[0] &&
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <a href={receivedData.social[0].Website} target="_blank" rel="noreferrer" style={{ width: '30%', marginRight: '1rem', alignSelf: 'center' }}>{receivedData.social[0].Website}</a>
                                    <div id='social container' className='social-container'>
                                        {Object.entries(receivedData.social[0]).map((item) => {
                                            if (item[1] !== null) {
                                                if (item[0] === "Website" || item[0] === "Polyaddress" || item[0] === "Etheraddress" || item[0] === "Confluxaddress") return null
                                                return (
                                                    <SocialMedia url={logoObj[item[0]]} link={item[1]} socialText={item[0]} />
                                                )
                                            }
                                        })}
                                    </div>
                                </div>
                            }
                        </div>
                        <div style={{ padding: '2.5em 0 0 0' }}>
                            {receivedData.projectDescription && <p>{receivedData.projectDescription[0]}</p>}
                            {receivedData.projectDescription &&
                                receivedData.projectDescription
                                    .slice(1)
                                    .map(desc => <p style={{ paddingTop: '2rem' }}>{desc}</p>)}
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    const Allocation = () => {

        const colorCodes = ["#C6224E", "#1E5D91", "#E29227", "#1C9965", "#70BA33"];
        const baseColorCodes = ["#631027", "#0f2e48", "#74490f", "#0e4c32", "#375d19"];

        const AllocationCard = ({ index }) => {

            // const computeCoverClass = () => {
            //     let classString = 'cover';
            //     let coverOpenState = coverOpenStates[index];
            //     if (coverOpenState === 'open') {
            //         classString += ' openCover';
            //     } else if (coverOpenState === 'removed') {
            //         classString = 'nocover';
            //     }
            //     return classString;
            // };


            return (
                <div className='allocationCard-container'>
                    <div className="allocationCard" style={{ backgroundColor: baseColorCodes[index] }}>
                        <div
                            className={"cover"}
                            style={{ backgroundColor: colorCodes[index] }}
                        >
                        </div>
                    </div>
                </div>
            );
        };

        const allocationCards = () => {
            const cards = [];
            for (let i = 0; i < 5; i++) {
                cards.push(
                    <AllocationCard
                        index={i}
                    />
                );
            }
            return cards;
        };

        const tooltipTitle = () => {
            return (
                <div>
                    <span>Increase Your Allocation Amount:</span>
                    <br />
                    <span className='tool-tip-content'>
                        1.Increase your trading volume @ <Link to="/#/exchange" target="_blank">Exchange</Link>
                    </span>
                    <br />
                    <span className='tool-tip-content'>
                        2.Increase your liquidity @ <Link to="/#/liquidity" target="_blank">Liquidity</Link>
                    </span>
                    <br />
                    <span className='tool-tip-content'>
                        3.Buy and hold more $ACY @ <Link to="/#/exchange" target="_blank">Exchange</Link>
                    </span>
                </div>
            )
        }


        return (
            <div>
                <div className='cardContent allocation-content allocation-content-active'>
                    <div className="allocation-title-container">
                        <div className='title-tooltip-container'>
                            <p className="allocation-title">Allocation</p>
                            <Tooltip title={tooltipTitle} mouseEnterDelay={0} mouseLeaveDelay={0.25}>
                                <Icon type="info-circle" className='tool-tip-icon' />
                            </Tooltip>
                        </div>

                        <div className='allocation-cards'>
                            <div className="allocationContainer">
                                <AllocationCard index={0} />
                                <AllocationCard index={1} />
                                <AllocationCard index={2} />
                                <AllocationCard index={3} />
                                <AllocationCard index={4} />
                            </div>
                        </div>
                        <div className="allocation-container-dummy"></div>
                    </div>

                    <form className="sales-container">
                        <label for="sale-number" className="sale-vesting-title">
                            Sale
                        </label>
                        <div className="sales-input-container">
                            <InputGroup>
                                <Input
                                    className="sales-input"
                                />
                                <div className="unit-max-group">
                                    <div className="token-logo">
                                        <img src={mainCoinLogoURI} alt="token-logo" className="token-image" />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '2rem', fontWeight: '700' }}>{receivedData.mainCoin}</div>
                                </div>
                            </InputGroup>
                        </div>
                        <Button
                            className="sales-submit"
                            disabled={true}
                        >
                            Buy
                        </Button>
                    </form>

                    {poolDistributionStage = false && poolDistributionDate &&
                        <div className="vesting-open-container">
                            <div className="vesting-container">
                                <p className="sale-vesting-title vesting">Vesting</p>
                                <div className="text-line-container">
                                    <p>Unlock 0% at TGE, 0 stages of vesting : </p>
                                    <span className="vesting-line" />

                                </div>
                                <div className="arrow-down-container">
                                    <CaretDownOutlined
                                        className={'arrow-down-inactive arrow-down'}
                                    />
                                </div>
                                <div className='vesting-trigger-container'></div>
                            </div>
                        </div>
                    }
                </div>

            </div>
        );
    };

    const CardArea = () => {
        return (
            <div className="gridContainer">
                <div className="leftGrid">
                    <TokenProcedure />
                    {poolBaseData &&
                        <KeyInformation
                            projectToken={receivedData.projectToken}
                            totalSale={poolBaseData[0]}
                            tokenPrice={receivedData.tokenPrice}
                        />
                    }

                </div>
                <div className="rightGrid">
                    <div className="circleBorderCard">
                        <Allocation />
                    </div>
                    <ProjectDescription />
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="mainContainer">
                <TokenBanner posterUrl={receivedData.posterUrl} />
                <TokenLogoLabel
                    projectName={receivedData.projectName}
                    tokenLogo={receivedData.tokenLogoUrl}
                />
                <CardArea />
            </div>
        </div>
    );
};

export default LaunchpadPendingProject;