import { CHAINS } from '../chains';

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
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <select
          className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        >
          {displayDefault ? <option value={-1}>Default Chain</option> : null}
          {chainIds.map(chainId => (
            <option key={chainId} value={chainId}>
              {CHAINS[chainId]?.name ?? chainId}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ChainSelect;
