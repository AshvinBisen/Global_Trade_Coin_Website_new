import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer} from 'react-toastify';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { bsc } from 'viem/chains'

const chains = [bsc];
const projectId = '2c599bd6df5b62c9c0227e19db3a730d';

const metadata = {
  name: 'Globle Trade Coin',
  description: '',
  url: '',
  icons: ['']
}

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  metadata,
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient

});
const ethereumClient = new EthereumClient(wagmiConfig, chains);


createRoot(document.getElementById('root')).render(
  <>
    <WagmiConfig config={wagmiConfig}>
      <ToastContainer />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </WagmiConfig>
    <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
  </>
)
