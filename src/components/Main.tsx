import { useState } from 'react';
import { Col, Spin, Space } from 'antd';

import reactLogo from '../assets/react.svg';
import '../App.css';
import MetaMaskCard from './connectorsCards/MetaMaskCard';

const Main = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Col span={4} offset={4} className="App_logo">
        <MetaMaskCard />
      </Col>
    </div>
  );
};

export default Main;
