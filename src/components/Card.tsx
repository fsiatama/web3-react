import { Web3ReactHooks } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { Network } from '@web3-react/network';
import { getName } from '../utils/connectorUtils';
import Accounts from './Accounts';
import Chain from './Chain';
import ConnectWithSelect from './ConnectWithSelect';
import Status from './Status';

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
    <div className="flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          <Status
            isActivating={isActivating}
            isActive={isActive}
            error={error}
          />
        </h5>
        <div className="mb-4">
          <Chain chainId={chainId} />
          <Accounts
            accounts={accounts}
            provider={provider}
            ENSNames={ENSNames}
          />
        </div>
        <ConnectWithSelect
          connector={connector}
          chainId={chainId}
          isActivating={isActivating}
          isActive={isActive}
          error={error}
          setError={setError}
        />
      </div>
    </div>
  );
};

export default Card;
