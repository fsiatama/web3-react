import type { Web3ReactHooks } from '@web3-react/core';
import type { MetaMask } from '@web3-react/metamask';
import { Network } from '@web3-react/network';
import { getAddChainParameters } from '../chains';
import useConnectWithSelect from './customHooks/useConnectWithSelect';
import ChainSelect from './ChainSelect';
import {
  DisconnectOutlined,
  ExclamationCircleOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';

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
      <>
        <ChainSelect
          chainId={desiredChainId}
          switchChain={switchChain}
          displayDefault={displayDefault}
          chainIds={chainIds}
        />
        <div style={{ marginBottom: '1rem' }} />
        <Button
          icon={<ExclamationCircleOutlined />}
          type="primary"
          onClick={onClick}
          block
          danger
        >
          Try Again?
        </Button>
      </>
    );
  } else if (isActive) {
    return (
      <>
        <ChainSelect
          chainId={desiredChainId === -1 ? -1 : chainId}
          switchChain={switchChain}
          displayDefault={displayDefault}
          chainIds={chainIds}
        />
        <div style={{ marginBottom: '1rem' }} />
        <Button
          type="primary"
          icon={<WalletOutlined />}
          block
          ghost
          onClick={() => {
            if (connector?.deactivate) {
              void connector.deactivate();
            } else {
              void connector.resetState();
            }
          }}
        >
          Disconnect
        </Button>
      </>
    );
  } else {
    return (
      <>
        <ChainSelect
          chainId={desiredChainId}
          switchChain={isActivating ? undefined : switchChain}
          displayDefault={displayDefault}
          chainIds={chainIds}
        />
        <div style={{ marginBottom: '1rem' }} />
        <Button
          type="primary"
          block
          icon={<DisconnectOutlined />}
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
        </Button>
      </>
    );
  }
};

export default ConnectWithSelect;
