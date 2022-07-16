import { useState } from 'react';
import { Col, Spin, Space } from 'antd';

import reactLogo from '../assets/react.svg';
import '../App.css';

const Main = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Col span={4} offset={10} className="App_logo">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </Col>
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default Main;
