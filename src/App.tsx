import { FC } from 'react';

import Main from './pages/Main';
import WalletConnectProvider from './components/WalletConnectProvider';
import './index.css';

const App: FC = () => {
  return (
    <>
      <WalletConnectProvider />
      <Main />
    </>
  );
};

export default App;
