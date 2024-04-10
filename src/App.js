import './App.css';
import { useEffect } from 'react';
import { loadFIR, loadNetwork, loadProvider, subscribeToEvents } from './store/interactions';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Form  from './components/Form/Form';
import config from "./config.json";

function App() {
  const dispatch = useDispatch();
  const loadBlockchainData = async () => {
    try {
      const provider = loadProvider(dispatch);
      const chainId = await loadNetwork(provider, dispatch);
      console.log("chainId:", chainId);
      console.log("config:", config);
      if (config[chainId] && config[chainId].FIRRecord) {
        const fir_config = config[chainId].FIRRecord;
        const fir = await loadFIR(provider, fir_config.address, dispatch);
        subscribeToEvents(fir, dispatch);
      } else {
        console.error("Invalid chainId or missing FIR configuration in config.");
      }
    } catch (error) {
      console.error("Error loading blockchain data:", error);
    }
  };
  useEffect(()=>{
    loadBlockchainData();
  });
  return (
    <div className="App">
      <Navbar></Navbar>
      <Form></Form>
    </div>
  );
}

export default App;
