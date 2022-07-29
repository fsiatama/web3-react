import { FC } from 'react';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';

import Main from './pages/Main';
import WalletConnectProvider from './components/WalletConnectProvider';
import './index.css';
import rootReducer from './reducers/rootReducer';

const composedEnhancers = compose(applyMiddleware(thunk));

const store = createStore(rootReducer, composedEnhancers);

const App: FC = () => {
  return (
    <Provider store={store}>
      <WalletConnectProvider />
      <Main />
    </Provider>
  );
};

export default App;
