import React, { forwardRef, useState } from 'react';
import styles from '@/pages/Farms/Farms.less';
import { AcyModal } from '@/components/Acy';
import DatePicker from 'react-datepicker';
import { AcySmallButtonGroup } from '@/components/AcySmallButton';
import { isMobile } from 'react-device-detect';
import { harvestAll } from '@/acy-dex-swap/core/farms';

<<<<<<< HEAD
const FarmsTableRow = ({
  index,
  poolId,
  stakedTokenAddr,
  token1,
  token1Logo,
  token2,
  token2Logo,
  totalApr,
  tvl,
  hidden,
  rowClickHandler,
  pendingReward,
  walletConnected,
  connectWallet,
  showModal,
  hideModal,
  isModalVisible,
  hideArrow = false,
  account,
  library,
}) => {
  const [date, setDate] = useState(new Date());
  const [selectedPresetDate, setSelectedPresetDate] = useState(null);
  const [stake, setStake] = useState(0);
  const [balance, setBalance] = useState(12345);
  const [balancePercentage, setBalancePercentage] = useState(0);
=======
const FarmsTableRow = (
  {
    index,
    lpTokens,
    token1,
    token1Logo,
    token2,
    token2Logo,
    totalApr,
    tvl,
    hidden,
    rowClickHandler,
    pendingReward,
    walletConnected,
    connectWallet,
    showModal,
    hideModal,
    isModalVisible,
    hideArrow = false,
    account,
    library,
  }
) => {
  const [date, setDate] = useState(new Date())
  const [selectedPresetDate, setSelectedPresetDate] = useState(null)
  const [stake, setStake] = useState(0)
  const [balance, setBalance] = useState(12345)
  const [balancePercentage, setBalancePercentage] = useState(0)
  const [isHarvestDisabled, setIsHarvestDisabled] = useState(false)
>>>>>>> 225b2d25a8c2aecdbb3442a21960bbdf778d25d4

  const updateStake = newStake => {
    let newStakeInt = newStake !== '' ? parseInt(newStake, 10) : '';
    newStakeInt = newStakeInt > balance ? balance : newStakeInt;
    if (newStakeInt === '' || !Number.isNaN(newStakeInt)) setStake(newStakeInt);
    setBalancePercentage(Math.floor((newStakeInt / balance) * 100));
  };

  const updateBalancePercentage = percentage => {
    const percentageInt = percentage === '' ? 0 : parseInt(percentage, 10);
    if (Number.isNaN(percentageInt)) return;
    setStake((balance * percentageInt) / 100);
    setBalancePercentage(percentageInt);
  };

  const updateDate = (type, value, index) => {
    const newDate = new Date();
    if (type === 'week') newDate.setHours(newDate.getHours() + 24 * 7 * value);
    else if (type === 'month') newDate.setMonth(newDate.getMonth() + value);
    else if (type === 'year') newDate.setFullYear(newDate.getFullYear() + value);
    else return;
    setDate(newDate);
    setSelectedPresetDate(index);
  };

  const datePickerChangeHandler = newDate => {
    setDate(newDate);
    setSelectedPresetDate(null);
  };

  const CustomDatePickerInput = forwardRef(({ value, onClick }, ref) => (
    <button type="button" className={styles.datePickerInput} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const updateBalance = () => {
    console.log('update balance');
    setBalance(balance + 1);
  };

  return (
    <div className={styles.tableBodyRowContainer}>
      {/* Table Content */}
      <div className={styles.tableBodyRowContentContainer} onClick={rowClickHandler}>
        {/* Token Title Row */}
        <div className={styles.tableBodyTitleColContainer}>
          {token1Logo && (
            <div className={styles.token1LogoContainer}>
              <img src={token1Logo} alt={token1} />
            </div>
          )}

          {/* conditionally hide and show token 2 logo. */}
          {/* if token 2 is undefined or null, hide token 2 logo. */}
          {token2Logo && (
            <div className={styles.token2LogoContainer}>
              <img src={token2Logo} alt={token2} />
            </div>
          )}

          {/* conditionally hide and show token 2 symbol */}
          {/* only display token 1 symbol if token 2 is undefined or null. */}
          <div className={styles.tokenTitleContainer}>
            {token1 && token2 && `${token1}-${token2}`}
            {token1 && !token2 && `${token1}`}
            {token2 && !token1 && `${token2}`}
            {!isMobile ? token1 && token2 && <span style={{ opacity: '0.5' }}> LP</span> : ''}
          </div>
        </div>

        {/* Pending Reward Column */}
        <div className={styles.tableBodyRewardColContainer}>
<<<<<<< HEAD
          <div className={styles.pendingRewardTitleContainer}>
            {isMobile ? 'Reward' : 'Pending Reward'}
          </div>
          {pendingReward.map(reward => (
=======
          <div className={styles.pendingRewardTitleContainer}>{isMobile ? 'Reward' : 'Total Reward'}</div>
          {pendingReward.map((reward) => (
>>>>>>> 225b2d25a8c2aecdbb3442a21960bbdf778d25d4
            <div className={styles.pendingReward1ContentContainer}>
              {`${reward.amount} ${reward.token}`}
            </div>
          ))}
        </div>

        {/* Total APR Column */}
        <div className={styles.tableBodyAprColContainer}>
          <div className={styles.totalAprTitleContainer}>APR</div>
          <div className={styles.totalAprContentContainer}>{totalApr}%</div>
        </div>

        {/* TVL Column */}
        {!isMobile && (
          <div className={styles.tableBodyTvlColContainer}>
            <div className={styles.tvlTitleContainer}>TVL</div>
            <div className={styles.tvlContentContainer}>${tvl}</div>
          </div>
        )}

        {/* Arrow Icon Column */}
        {!hideArrow && (
          <div className={styles.tableBodyArrowColContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.arrowIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>

      {/* Table Drawer */}
      <div className={styles.tableBodyDrawerContainer} hidden={hidden}>
        {/* Add Liquidity Column */}
        <div className={styles.tableBodyDrawerLiquidityContainer}>
          <div>Add Liquidity:</div>
          <div>
            <a className={styles.tableCodyDrawerLiquidityLink}>
              {token2 ? `${token1}-${token2}` : `${token1}`} {!isMobile ? 'LP' : ''}
            </a>
          </div>
        </div>

        {/* Harvest Reward Column */}
        <div className={styles.tableBodyDrawerRewardContainer}>
          <div className={styles.tableBodyDrawerRewardTitle}>Pending Reward</div>
          <div className={styles.tableBodyDrawerRewardContent}>
            <div className={styles.tableBodyDrawerRewardTokenContainer}>
              {pendingReward.map(reward => (
                <div className={styles.pendingReward1ContentContainer}>
                  {`${reward.amount} ${reward.token}`}
                </div>
              ))}
            </div>
            <button
              type="button"
              className={styles.tableBodyDrawerRewardHarvestButton}
<<<<<<< HEAD
              onClick={() => harvestAll(index, library, account)}
=======
              style={isHarvestDisabled ? { cursor: 'not-allowed' } : {}}
              onClick={() => harvestAll(index, library, account, setIsHarvestDisabled)}
              disabled={isHarvestDisabled}
>>>>>>> 225b2d25a8c2aecdbb3442a21960bbdf778d25d4
            >
              Harvest
            </button>
          </div>
        </div>

        {/* Farm Column */}
        <div className={styles.tableBodyDrawerFarmContainer}>
          <div className={styles.tableBodyDrawerWalletTitle}>Start Farming</div>
          <div>
            {walletConnected ? (
              <button
                type="button"
                className={styles.tableBodyDrawerWalletButton}
                onClick={() => {
                  updateBalance();
                  showModal();
                  console.log('show modal');
                  // let tokenBalance = await getUserTokenBalanceWithAddress(
                  //   stakedTokenAddr,
                  //   chainId,
                  //   account,
                  //   library
                  // );
                  // console.log(tokenBalance);
                }}
              >
                Stake LP
              </button>
            ) : (
              <button
                type="button"
                className={styles.tableBodyDrawerWalletButton}
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>

      <AcyModal onCancel={hideModal} width={400} visible={isModalVisible}>
        <div className={styles.amountRowContainer}>
          <div className={styles.amountRowInputContainer}>
            <input type="text" value={stake} onChange={e => updateStake(e.target.value)} />
          </div>
          <span className={styles.suffix}>ACY</span>
        </div>
        <div className={styles.balanceAmountContainer}>
          <div>
            tokenBalance: {balance} {token1}-{token2}
          </div>
          <div className={styles.balanceAmountInputContainer}>
            <input
              className={styles.balanceAmountInput}
              value={balancePercentage}
              onChange={e => updateBalancePercentage(e.target.value)}
            />
            <span className={styles.balanceAmountSuffix}>%</span>
          </div>
        </div>
        <div className={styles.sliderWrapper}>
          <input
            type="range"
            min="0"
            max="100"
            className={styles.slider}
            value={balancePercentage}
            onChange={e => updateBalancePercentage(e.target.value)}
          />
        </div>
        <div className={styles.lockTimeRow} onClick={updateBalance}>
          <div className={styles.dateSelectionContainer}>
            <div className={styles.datePickerContainer}>
              <DatePicker
                selected={date}
                onChange={datePickerChangeHandler}
                customInput={<CustomDatePickerInput />}
              />
            </div>
            <div className={styles.presetDurationContainer}>
              <AcySmallButtonGroup
                activeButton={selectedPresetDate}
                buttonList={[
                  ['1W', () => updateDate('week', 1, 0)],
                  ['1M', () => updateDate('month', 1, 1)],
                  ['3M', () => updateDate('month', 3, 2)],
                  ['6M', () => updateDate('month', 6, 3)],
                  ['1Y', () => updateDate('year', 1, 4)],
                  ['4Y', () => updateDate('year', 4, 5)],
                ]}
                containerClass={styles.presetDurationSelection}
                theme="#eb5c20"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            className={styles.stakeSubmitButton}
            onClick={async () => {
              // deposit(stakedTokenAddr, stake, poolId, library, account);
            }}
          >
            Stake
          </button>
        </div>
      </AcyModal>
    </div>
  );
};

export default FarmsTableRow;
