import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider as ReactUIWalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { WalletAdapterNetwork, WalletError } from "@solana/wallet-adapter-base"
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  SolongWalletAdapter,
  TorusWalletAdapter
} from '@solana/wallet-adapter-wallets';
import { Cluster, clusterApiUrl } from "@solana/web3.js"
import { FC, ReactNode, useCallback, useMemo } from "react"
import { NetworkConfigurationProvider, useNetworkConfiguration } from './NetworkConfigurationProvider';
import { AutoConnectProvider, useAutoConnect } from './AutoConnectProvider';
import { notify } from "../utils/notifications"

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const { autoConnect } = useAutoConnect();
  const { networkConfiguration } = useNetworkConfiguration();
  const network = networkConfiguration as WalletAdapterNetwork

  const originalEndPoint = useMemo(() => clusterApiUrl(network), [network]);

  let endpoint;

  if (network == "mainnet-beta") {
    endpoint = "https://solana-mainnet.g.alchemy.com/v2/ZwlQvc2vzU6vHPH3rwfvN"
  } else if (network == "devnet") {
    endpoint = originalEndPoint;
  } else {
    endpoint = originalEndPoint;
  }

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new SolflareWalletAdapter(),
      new SolongWalletAdapter(),
      new TorusWalletAdapter(),
    ], [network]
  )

  const onError = useCallback((error: WalletError) => {
    notify({
      type: "error",
      message: error.message ? `${error.name}: $error.message` : error.name,
    });
    console.error(error)
  }, [])

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} onError={onError} autoConnect={autoConnect}>
        <ReactUIWalletModalProvider>
          {children}
        </ReactUIWalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <NetworkConfigurationProvider>
        <AutoConnectProvider>
          <WalletContextProvider>
            {children}
          </WalletContextProvider>
        </AutoConnectProvider>
      </NetworkConfigurationProvider>
    </>
  )
}