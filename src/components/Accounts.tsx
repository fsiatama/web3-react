import type { BigNumber } from '@ethersproject/bignumber';
import { formatEther } from '@ethersproject/units';
import type { Web3ReactHooks } from '@web3-react/core';
import { useEffect, useState } from 'react';

interface Props {
  accounts: ReturnType<Web3ReactHooks['useAccounts']>;
  provider: ReturnType<Web3ReactHooks['useProvider']>;
  ENSNames: ReturnType<Web3ReactHooks['useENSNames']>;
}

const Accounts = ({ accounts, provider, ENSNames }: Props) => {
  return <div>Accounts</div>;
};

export default Accounts;
