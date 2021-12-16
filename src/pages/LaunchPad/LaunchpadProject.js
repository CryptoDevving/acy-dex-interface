/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { history } from 'umi';
import { Table } from 'antd';
import LaunchChart from "./launchChart";
import { getTransferData } from '@/acy-dex-swap/core/launchPad';
import { 
    requireAllocation, 
    getAllocationInfo,
    getProjectInfo
} from '@/services/api';
import './css/LaunchpadProject.css';
import project from '@/models/project';
import AllocationIcon from "./components/AllocationIcon"
import Lottie from "@/assets/lottie";

const { apple, banana, brezel, burger, carrot, cheese, cherry, chocolateBar, corn, donut, eggs, frenchFries, honey, iceCream,
        lemon,meat,peach,pineapple,pizza,popcorn,raspberry,steak,strawberry,watermelon } = Lottie

const LaunchpadProject = () => {
    const { projectId } = useParams();
    const [receivedData, setReceivedData] = useState({})

    const props= {
        'salePercentage': '57',
        'alreadySale': '573,024',
    }
    
    const TokenBanner = () => {
        return (
            <video 
              autoplay="" 
              loop="" 
              playsinline="" 
              poster="https://files.krystal.app/krystalGo/acy-cover.png" 
              className="tokenBanner"
            >
                {/* <source src="https://files.krystal.app/krystalGo/acy-cover.png" /> */}
            </video>
        )
    }
    
    const TokenLogoLabel = ({projectName}) => {
        return (
            <div className="flexContainer">
                <img 
                  className="tokenLogo"
                  alt=""
                  src="https://files.krystal.app/krystalGo/acy-avatar.svg" 
                  loading="eager" 
                />
                <div className="tokenInfo">
                    <span className="tokenTitle">{projectName}</span>
                    <div className="tokenLabelBar">
                        {
                            receivedData.tokenLabels && receivedData.tokenLabels.map((label) => 
                                <span className="tokenLabel">{label}</span>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
    
    const TokenProcedure = () => {
    
        const Procedure = () => {
            return (
                <div className="cardContent">
                    <div className="procedure">
                        <hr aria-orientation="vertical" className="verticalDivideLine"></hr>
                        <div className="procedureNumber">1</div>
                        <div>
                            <p>Allocation</p>
                            <p className="shortText">{receivedData.regStart}</p>
                            <p className="shortText">{receivedData.regEnd}</p>
                        </div>
                    </div>
    
                    <div className="procedure" style={{ marginTop: '24px' }}>
                        <hr aria-orientation="vertical" className="verticalDivideLine"></hr>
                        <div className="procedureNumber">2</div>
                        <div>
                            <p>Sale</p>
                            <p className="shortText">{receivedData.saleStart}</p>
                            <p className="shortText">{receivedData.saleEnd}</p>
                        </div>
                    </div>
    
                    <div className="procedure" style={{ marginTop: '24px' }}>
                        <div className="procedureNumber">3</div>
                        <div>
                            <p>Vesting</p>
                        </div>
                    </div>
                    
                </div>
            );
        }
    
        const Progress = ({salePercentage, alreadySale, totalSale, projectToken}) => {
            
            const progressStyle = {
                width: {salePercentage} + '%'
            }
    
            return (
                <>
                    <div className="cardContent" style={{background: '#0f0f0f', borderRadius: '0rem 0rem 1rem 1rem'}}>
                        <div className="progressHeader">
                            <p>Sale Progress</p>
                            <p style={{color: '#eb5c1f'}}>
                                {salePercentage}%
                            </p>
                        </div>
                        <div className="progressBar">
                            <div 
                              className="progressBarLight"
                              aria-aria-valuemin="0"
                              aria-valuemax="100"
                              aria-valuenow={salePercentage}
                              role="progressbar"
                              style={progressStyle}
                            />
                        </div>
                        <div className="progressAmount">
                            <div>{`${alreadySale} / ${totalSale} ${receivedData.projectToken}`}</div>
                        </div>
                    </div>
                </>
            );
        }
    
        return (
            <div className="circleBorderCard" style={{
                padding: 0
            }}>
                <Procedure />
                <Progress salePercentage={props.salePercentage} alreadySale={props.alreadySale} totalSale={props.totalSale} projectToken={receivedData.projectToken} />
            </div>
        )
    }
    
    const KeyInformation = ({projectToken, totalSale, tokenPrice}) => {
        return (
            <div className="circleBorderCard cardContent">
                <div className="keyinfoRow">
                    <div className="keyinfoName">Total Sales</div>
                    <div>{totalSale} {projectToken}</div>
                </div>
    
                <div className="keyinfoRow" style={{marginTop: '1rem'}}>
                    <div className="keyinfoName">Total Raise</div>
                    <div>{totalSale} {projectToken}</div>
                </div>
    
                <div className="keyinfoRow" style={{marginTop: '1rem'}}>
                    <div className="keyinfoName">Rate</div>
                    <div>1 {projectToken} = {tokenPrice} USDT</div>
                </div>
            </div>
        );
    }
    
    const ProjectDescription = () => {
    
        return (
            <div className="circleBorderCard cardContent">
                <div style={{display: 'block'}}>
                    <h3>Project Description</h3>
                    <span className='lineSeperator' />
                    <div className="projectDescription">
                        {receivedData.projectDescription && 
                            <p>{receivedData.projectDescription[0]}</p>
                        }
                        {receivedData.projectDescription &&
                            receivedData.projectDescription.slice(1).map((desc) => 
                                <p style={{paddingTop: '2rem'}}>{desc}</p>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
    
    const ChartCard = () => {
    
        const [chartData, setChartData] = useState([]);
        const [transferData,setTransferData] = useState([]);
    
        const recordNum = 100;
        const transferTableHeader = [
            {
                title: 'Date Time(UTC)',
                dataIndex: 'dateTime',
                className: 'column-date',
                width: 120,
                align: 'left'
            },
            {
                title: 'Participants',
                dataIndex: 'participant',
                width: 80,
                align: 'center',
                ellipsis: true
            },
            {
                title: 'USDT',
                dataIndex: 'quantity',
                width: 60,
                align: 'center',
                ellipsis: true
            },
            {
                title: 'Ticket',
                dataIndex: 'Amount',
                width: 60,
                align: 'center',
                ellipsis: true
            },
        ];
    
        const ellipsisCenter = (str, preLength=6, endLength=4, skipStr='...') => {
            const totalLength = preLength + skipStr.length + endLength;
            if (str.length > totalLength) {
              return str.substr(0, preLength) + skipStr + str.substr(str.length-endLength, str.length);
            }
            return str;
        }
    
        useEffect(async () => {      
            const [newTransferData, newChartData] = await getTransferData();
            
            // ellipsis center address
            newTransferData.forEach(data => {
                data['participant'] = ellipsisCenter(data['participant']);
            })
    
            newChartData.splice(0, newChartData.length - recordNum);
            setTransferData(newTransferData);
            setChartData(newChartData);
        }, [])
    
        return (
            <div className="circleBorderCard cardContent">
                <LaunchChart  
                  data={chartData}
                  showXAxis
                  showYAxis
                  showGradient
                  lineColor="#e29227"
                  bgColor="#2f313500"
                />
                <Table
                  style={{ marginTop:'20px',textAlign:'center', height: '400px' }}
                  id="transferTable"
                  columns={transferTableHeader} 
                  dataSource={transferData}
                  pagination={false}
                  scroll={{ y: 400 }}
                />  
            </div>
        );
    }
    
    const AllocationCard = ({ 
        index, 
        Component, 
        allocationAmount, 
        setAllocationAmount, 
        walletId, 
        projectToken,
        url,
        lottieId,
        isHoverLottie,
        setIsHoverLottie
    }) => {
        
        const [coverOpenState, setCoverOpenState] = useState(false);
        const computeCoverClass = () => {
            let classString = 'cover';
            if(coverOpenState) {
                classString += ' openCover';
            }
            return classString;
        }
    
        // if allocation is done, cover cannot be opened
        // otherwise, require an allocation from server
        const clickCover = async (e) => {
            console.log('click cover', allocationAmount);
            const oldAllocationAmount = allocationAmount;
            // if (oldAllocationAmount === 0) {
            //     requireAllocation(walletId, projectToken).then(res => {
            //         if(res && res.allocationAmount) {
            //             setAllocationAmount(res.allocationAmount);
                        
            //         }
            //         console.log('allocation get', res.allocationAmount);
            //     }).catch(e => {
            //         console.error(e);
            //     })
            // }
            setCoverOpenState(true);
            e.preventDefault();
        }
    
        return (
            <div className="allocationCard" onClick={clickCover}>
                <div class={computeCoverClass()}>
                    <div className='allocationCard-inner' onMouseEnter={()=>setIsHoverLottie(true)} onMouseLeave={()=>setIsHoverLottie(false)}>
                        <div className='' style={{width: "54px", height: "54px"}}>
                            <AllocationIcon play={isHoverLottie} url={url} id={lottieId} />
                        </div>
                        <p className='inner-text'>{index + 1}</p>
                    </div>
                </div>
            </div>
        )
    }

    
    const Allocation = ({walletId, projectToken}) => {

        const [allocationAmount, setAllocationAmount] = useState(0);
    
        useEffect(async () => {
            // get allocation status from backend at begining
            await getAllocationInfo(walletId, projectToken).then(res => {
                if (res && res.allocationAmount) {
                    setAllocationAmount(res.allocationAmount);
                    console.log('allocation amount', res.allocationAmount);
                }
            }).catch(e => {
                console.error(e);
            });
        }, [])
    
        // TODO: replace with 24 icon
        const BaseCard = ({url}) => {
            return (
                <div style={{ background: 'white', height:"64px", width: "64px", borderRadius: "8px" }}>
                    {/* <AllocationIcon play={true} url={url} id="apple"/> */}
                </div>
            );
        }
    
        // TODO: assign each icon to allocation card
        const allocationCards = () => {
            const cards = [];
            // ALL 24 States
            const [isHoverApple, setIsHoverApple] = useState(false);
            const [isHoverBanana, setIsHoverBanana] = useState(false);
            const [isHoverBrezel, setIsHoverBrezel] = useState(false);
            const [isHoverBurger, setIsHoverBurger] = useState(false);
            const [isHoverCarrot, setIsHoverCarrot] = useState(false);
            const [isHoverCheese, setIsHoverCheese] = useState(false);
            const [isHoverCherry, setIsHoverCherry] = useState(false);
            const [isHoverChocolateBar, setIsHoverChocolateBar] = useState(false);
            const [isHoverCorn, setIsHoverCorn] = useState(false);
            const [isHoverDonut, setIsHoverDonut] = useState(false);
            const [isHoverEggs, setIsHoverEggs] = useState(false);
            const [isHoverFrenchFries, setIsHoverFrenchFries] = useState(false);
            const [isHoverHoney, setIsHoverHoney] = useState(false);
            const [isHoverIceCream, setIsHoverIceCream] = useState(false);
            const [isHoverLemon, setIsHoverLemon] = useState(false);
            const [isHoverMeat, setIsHoverMeat] = useState(false);
            const [isHoverPeach, setIsHoverPeach] = useState(false);
            const [isHoverPineapple, setIsHoverPineapple] = useState(false);
            const [isHoverPizza, setIsHoverPizza] = useState(false);
            const [isHoverPopcorn, setIsHoverPopcorn] = useState(false);
            const [isHoverRaspberry, setIsHoverRaspberry] = useState(false);
            const [isHoverSteak, setIsHoverSteak] = useState(false);
            const [isHoverStrawberry, setIsHoverStrawberry] = useState(false);
            const [isHoverWatermelon, setIsHoverWatermelon] = useState(false);
    
            const url = [apple, banana, brezel, burger, carrot, cheese, cherry, chocolateBar, corn, donut, eggs, frenchFries, honey, iceCream,
                         lemon,meat,peach,pineapple,pizza,popcorn,raspberry,steak,strawberry,watermelon];
            const lottieId = ["apple", "banana", "brezel", "burger", "carrot", "cheese", "cherry", "chocolateBar", "corn", "donut", "eggs", "frenchFries",
                         "honey", "iceCream", "lemon", "meat", "peach", "pineapple", "pizza", "popcorn", "raspberry", "steak", "strawberry", "watermelon"];
            const states = [isHoverApple, isHoverBanana, isHoverBrezel, isHoverBurger, isHoverCarrot, isHoverCheese, isHoverCherry, isHoverChocolateBar, isHoverCorn,
                isHoverDonut, isHoverEggs, isHoverFrenchFries, isHoverHoney, isHoverIceCream, isHoverLemon, isHoverMeat, isHoverPeach, isHoverPineapple, isHoverPizza,
                isHoverPopcorn, isHoverRaspberry, isHoverSteak, isHoverStrawberry, isHoverWatermelon]
            const stateFunction = [setIsHoverApple, setIsHoverBanana, setIsHoverBrezel, setIsHoverBurger, setIsHoverCarrot, setIsHoverCheese, setIsHoverCherry, setIsHoverChocolateBar,
                setIsHoverCorn, setIsHoverDonut, setIsHoverEggs, setIsHoverFrenchFries, setIsHoverHoney, setIsHoverIceCream, setIsHoverLemon, setIsHoverMeat, setIsHoverPeach, setIsHoverPineapple,
                setIsHoverPizza, setIsHoverPopcorn, setIsHoverRaspberry, setIsHoverSteak, setIsHoverStrawberry, setIsHoverWatermelon]
            for(let i = 0; i < 24; i++) {
                cards.push(
                    <AllocationCard 
                      index={i} 
                      Component={BaseCard}
                      url={url[i]}
                      lottieId={lottieId[i]}
                      isHoverLottie={states[i]}
                      setIsHoverLottie={stateFunction[i]}  
                      allocationAmount={allocationAmount}
                      setAllocationAmount={setAllocationAmount}
                      walletId={walletId}
                      projectToken={project}
                    />
                )
            }
            return cards;
        }
    
        return (
            <div className="cardContent">
                <div className="centerTitle">
                    <h2 style={{ textAlign: 'center',color: '#FFFFFF'}}>
                        Allocation
                    </h2>
                </div>
                <div className="allocationContainer">
                    {allocationCards()}
                </div>
            </div>
        );
    }
    
    const CardArea = () => {
        return (
            <div className="gridContainer">
                <div className="leftGrid">
                    <TokenProcedure />
                    <KeyInformation projectToken={receivedData.projectToken} totalSale={receivedData.totalSale} tokenPrice={receivedData.tokenPrice} />
                </div>
                <div className="rightGrid">
                    <div className="circleBorderCard">
                        <Allocation walletId="1234" projectToken="ACY" />
                    </div>
                    <ProjectDescription />
                    <ChartCard />
                </div>
            </div>
        )
    }

    useEffect(() => {
        getProjectInfo(projectId).then(res => {
            if(res) {
                // extract data from string
                const dataNeeded = res.contextData.split('|')
                const data1 = dataNeeded[0].trim().split(" ")
                const data2 = dataNeeded[1].trim().split("%")

                const d1 = new Date(res.regStart);
                const d2 = new Date(res.regEnd);
                const d3 = new Date(res.saleStart);
                const d4 = new Date(res.saleEnd);

                const dateTime1 = d1.toLocaleDateString() + ' ' + d1.toTimeString().substring(0, d1.toTimeString().indexOf("GMT"));
                const dateTime2 = d2.toLocaleDateString() + ' ' + d2.toTimeString().substring(0, d2.toTimeString().indexOf("GMT"));
                const dateTime3 = d3.toLocaleDateString() + ' ' + d3.toTimeString().substring(0, d3.toTimeString().indexOf("GMT"));
                const dateTime4 = d4.toLocaleDateString() + ' ' + d4.toTimeString().substring(0, d4.toTimeString().indexOf("GMT"));

                res["regStart"] = dateTime1;
                res["regEnd"] = dateTime2;
                res["saleStart"] = dateTime3;
                res["saleEnd"] = dateTime4;
                res["tokenLabels"] = data1
                res["projectDescription"] = data2
                setReceivedData(res);
            } else {
                console.log('redirect to list page');
                history.push('/launchpad');
            }
        }).catch(e => console.error(e));
    }, [])

    return(
        <div className="mainContainer">
            <TokenBanner />
            <TokenLogoLabel projectName={receivedData.projectName} />
            <CardArea />
        </div>
    );
}

export default LaunchpadProject;
