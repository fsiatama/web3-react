import type { Web3ReactHooks } from '@web3-react/core';
import type { MetaMask } from '@web3-react/metamask';
import { Network } from '@web3-react/network';
import { useCallback, useState } from 'react';
import { CHAINS, getAddChainParameters, URLS } from '../../chains';

interface Props {
  connector: MetaMask | Network;
  chainId: ReturnType<Web3ReactHooks['useChainId']>;
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>;
  isActive: ReturnType<Web3ReactHooks['useIsActive']>;
  error: Error | undefined;
  setError: (error: Error | undefined) => void;
}

const useConnectWithSelect = ({
  connector,
  chainId,
  isActivating,
  isActive,
  error,
  setError,
}: Props) => {
  const isNetwork = connector instanceof Network;
  const displayDefault = !isNetwork;
  const chainIds = (isNetwork ? Object.keys(URLS) : Object.keys(CHAINS)).map(
    chainId => Number(chainId),
  );

  const [desiredChainId, setDesiredChainId] = useState<number>(
    isNetwork ? 1 : -1,
  );

  const switchChain = useCallback(
    (desiredChainId: number) => {
      setDesiredChainId(desiredChainId);
      // if we're already connected to the desired chain, return
      if (desiredChainId === chainId) {
        setError(undefined);
        return;
      }

      // if they want to connect to the default chain and we're already connected, return
      if (desiredChainId === -1 && chainId !== undefined) {
        setError(undefined);
        return;
      }

      if (connector instanceof Network) {
        connector
          .activate(desiredChainId === -1 ? undefined : desiredChainId)
          .then(() => setError(undefined))
          .catch(setError);
      } else {
        connector
          .activate(
            desiredChainId === -1
              ? undefined
              : getAddChainParameters(desiredChainId),
          )
          .then(() => setError(undefined))
          .catch(setError);
      }
    },
    [connector, chainId, setError],
  );

  const onClick = useCallback((): void => {
    setError(undefined);
    if (connector instanceof Network) {
      connector
        .activate(desiredChainId === -1 ? undefined : desiredChainId)
        .then(() => setError(undefined))
        .catch(setError);
    } else {
      connector
        .activate(
          desiredChainId === -1
            ? undefined
            : getAddChainParameters(desiredChainId),
        )
        .then(() => setError(undefined))
        .catch(setError);
    }
  }, [connector, desiredChainId, setError]);

  return { desiredChainId, displayDefault, chainIds, switchChain, onClick };
};

export default useConnectWithSelect;
