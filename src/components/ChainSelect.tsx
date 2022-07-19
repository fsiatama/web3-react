import { Select } from 'antd';
import { CHAINS } from '../chains';

const { Option } = Select;

interface Props {
  chainId: number | undefined;
  switchChain: ((chainId: number) => void) | undefined;
  displayDefault: boolean;
  chainIds: number[];
}

const ChainSelect = ({
  chainId,
  switchChain,
  displayDefault,
  chainIds,
}: Props) => {
  return (
    <Select
      value={chainId}
      onChange={(value: number) => {
        switchChain?.(Number(value));
      }}
      disabled={switchChain === undefined}
    >
      {displayDefault ? <Option value={-1}>Default Chain</Option> : null}
      {chainIds.map(chainId => (
        <Option key={chainId} value={chainId}>
          {CHAINS[chainId]?.name ?? chainId}
        </Option>
      ))}
    </Select>
  );
};

export default ChainSelect;
