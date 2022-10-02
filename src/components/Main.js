import React, { useState } from 'react';
import { Box } from '@mui/system';
import RoundButton from './common/RoundButton';
import Tokens from './Tokens';
import Farms from './farms/Farms';
import Pools from './Pools';

const Main = ({
  openWalletAlert,
  walletAddress,
  chain,
  farms,
  farmsv3,
  pairs,
  totalLiquidity,
  farmTokens,
  stakeTokens,
  stakePools
}) => {
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          width: '1366px',
          background: '#081931',
          borderRadius: '10px',
        }}
      >
        <Box
          sx={{
            py: '2%',
            px: '8%',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            display: 'flex',
          }}
        >
          <RoundButton onClick={()=>setTabIndex(0)} variant='contained'>
            Tokens
          </RoundButton>
          <RoundButton onClick={()=>setTabIndex(1)} variant='contained'>
            Farms
          </RoundButton>
          <RoundButton onClick={()=>setTabIndex(2)} variant='contained'>
            Pools
          </RoundButton>
        </Box>
        <Box>
          {
            (tabIndex === 0) && (
              <Tokens 
                chain={chain}
                walletAddress={walletAddress}
                farmTokens={farmTokens}
                stakeTokens={stakeTokens}
              />
            )
          }
          {
            (tabIndex === 1) && (
              <Farms
                openWalletAlert={openWalletAlert}
                walletAddress={walletAddress}
                farms={farms}
                farmsv3={farmsv3}
                pairs={pairs}
                totalLiquidity={totalLiquidity}
              />
            )
          }
          {
            (tabIndex === 2) && (
              <Pools 
                chain={chain}
                walletAddress={walletAddress}
                stakePools={stakePools}
              />
            )
          }
        </Box>
      </Box>
    </Box>
  );
}

export default Main;