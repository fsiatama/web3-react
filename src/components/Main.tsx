import { Col } from 'antd';

import MetaMaskCard from './connectorsCards/MetaMaskCard';

import '../App.css';

const Main = () => {
  return (
    <div className="App">
      <Col span={4} offset={4} className="App_logo">
        <MetaMaskCard />
      </Col>
    </div>
  );
};

export default Main;
