import { Card as AntCard, Typography } from 'antd';
import { Web3ReactHooks } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { Network } from '@web3-react/network';
import { getName } from '../utils/connectorUtils';
import Accounts from './Accounts';
import Chain from './Chain';
import ConnectWithSelect from './ConnectWithSelect';
import Status from './Status';

const { Text } = Typography;

interface Props {
  connector: MetaMask | Network;
  chainId: ReturnType<Web3ReactHooks['useChainId']>;
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>;
  isActive: ReturnType<Web3ReactHooks['useIsActive']>;
  error: Error | undefined;
  setError: (error: Error | undefined) => void;
  ENSNames: ReturnType<Web3ReactHooks['useENSNames']>;
  provider?: ReturnType<Web3ReactHooks['useProvider']>;
  accounts?: string[];
}

const Card = ({
  connector,
  chainId,
  isActivating,
  isActive,
  error,
  setError,
  ENSNames,
  accounts,
  provider,
}: Props) => {
  return (
    <AntCard
      title={<Text>{getName(connector)}</Text>}
      style={{ width: '20rem' }}
    >
      <p>
        <Status isActivating={isActivating} isActive={isActive} error={error} />
      </p>
      <Chain chainId={chainId} />
      <div style={{ marginBottom: '1rem' }}>
        <Accounts accounts={accounts} provider={provider} ENSNames={ENSNames} />
      </div>
      <ConnectWithSelect
        connector={connector}
        chainId={chainId}
        isActivating={isActivating}
        isActive={isActive}
        error={error}
        setError={setError}
      />
    </AntCard>
  );
};

export default Card;
