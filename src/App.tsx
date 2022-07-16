import { Web3ReactProvider } from '@web3-react/core';
import { ExternalProvider, Web3Provider } from '@ethersproject/providers';
import Main from './components/Main';

const getLibrary = (provider: ExternalProvider) => {
  return new Web3Provider(provider);
};

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Main />
    </Web3ReactProvider>
  );
};

export default App;
