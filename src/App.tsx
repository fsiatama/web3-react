import Main from './pages/Main';
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
