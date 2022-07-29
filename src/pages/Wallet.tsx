import { FC } from 'react';
import MetaMaskCard from '../components/connectorsCards/MetaMaskCard';

type Props = {};

const Wallet: FC = (props: Props) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-start-2 col-span-4 ...">
        <MetaMaskCard />
      </div>
    </div>
  );
};

export default Wallet;
