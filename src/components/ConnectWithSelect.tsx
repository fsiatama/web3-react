import type { Web3ReactHooks } from '@web3-react/core';
import type { MetaMask } from '@web3-react/metamask';
import { Network } from '@web3-react/network';
import { getAddChainParameters } from '../chains';
import useConnectWithSelect from './customHooks/useConnectWithSelect';
import ChainSelect from './ChainSelect';

interface Props {
  connector: MetaMask | Network;
  chainId: ReturnType<Web3ReactHooks['useChainId']>;
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>;
  isActive: ReturnType<Web3ReactHooks['useIsActive']>;
  error: Error | undefined;
  setError: (error: Error | undefined) => void;
}

const ConnectWithSelect = ({
  connector,
  chainId,
  isActivating,
  isActive,
  error,
  setError,
}: Props) => {
  const { desiredChainId, switchChain, displayDefault, chainIds, onClick } =
    useConnectWithSelect({
      connector,
      chainId,
      isActivating,
      isActive,
      error,
      setError,
    });

  if (error) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {
          <ChainSelect
            chainId={desiredChainId}
            switchChain={switchChain}
            displayDefault={displayDefault}
            chainIds={chainIds}
          />
        }
        <div style={{ marginBottom: '1rem' }} />
        <button onClick={onClick}>Try Again?</button>
      </div>
    );
  } else if (isActive) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ChainSelect
          chainId={desiredChainId === -1 ? -1 : chainId}
          switchChain={switchChain}
          displayDefault={displayDefault}
          chainIds={chainIds}
        />
        <div style={{ marginBottom: '1rem' }} />
        <button
          onClick={() => {
            if (connector?.deactivate) {
              void connector.deactivate();
            } else {
              void connector.resetState();
            }
          }}
        >
          Disconnect
        </button>
      </div>
    );
  } else {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ChainSelect
          chainId={desiredChainId}
          switchChain={isActivating ? undefined : switchChain}
          displayDefault={displayDefault}
          chainIds={chainIds}
        />
        <div style={{ marginBottom: '1rem' }} />
        <button
          onClick={
            isActivating
              ? undefined
              : () =>
                  connector instanceof Network
                    ? connector
                        .activate(
                          desiredChainId === -1 ? undefined : desiredChainId,
                        )
                        .then(() => setError(undefined))
                        .catch(setError)
                    : connector
                        .activate(
                          desiredChainId === -1
                            ? undefined
                            : getAddChainParameters(desiredChainId),
                        )
                        .then(() => setError(undefined))
                        .catch(setError)
          }
          disabled={isActivating}
        >
          Connect
        </button>
      </div>
    );
  }
};

export default ConnectWithSelect;
