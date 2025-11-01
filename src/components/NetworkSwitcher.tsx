import {FC} from 'react'
import dynamic from 'next/dynamic'

//INTERNAL IMPORT
import { useNetworkConfiguration } from "../contexts/NetworkConfigurationProvider"
// import {NetworkSwitcher} from "./SVG/CreateSVG"

const NetworkSwitcher: FC = () => {
  const {networkConfiguration, setNetworkConfiguration} = useNetworkConfiguration();

  return <>
    <input type="checkbox" id="checkbox" />
    <label className='switch'>
      <select value={networkConfiguration} onChange={(e) => setNetworkConfiguration(e.target.value || "devnet")} className='select max-w-xs border-none bg-transparent outline-0'>
        <option value="mainnet-beta">main</option>
        <option value="devnet">dev</option>
        <option value="testnet">test</option>
      </select>
    </label>
  </>
};

export default dynamic(() => Promise.resolve(NetworkSwitcher), {
  ssr: false,
});