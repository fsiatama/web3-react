import Main from './components/Main';
import WalletConnectProvider from './components/WalletConnectProvider';

const App = () => {
  return (
    <>
      <WalletConnectProvider />
      <Main />
    </>
  );
};

export default App;
