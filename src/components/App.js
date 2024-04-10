import { Route, Routes } from "react-router-dom";
import "../App.css";
import Data from "./Data/Data";
import Form from "./Form/Form";
import Navbar from "./Navbar/Navbar";
import Option from "./Option/Option";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  loadAccount,
  loadAllData,
  loadFIR,
  loadNetwork,
  loadProvider,
  subscribeToEvents,
} from "../store/interactions";
import config from "../config.json";
import Alert from "./Alert/Alert";

function App() {
  const dispatch = useDispatch();
  
  const loadBlockchainData = async () => {
    const provider = loadProvider(dispatch);
    const chainId = await loadNetwork(provider, dispatch);
    const fir_config = config[chainId].FIRRecord;
    
    window.ethereum.on("accountsChanged", () => {
      loadAccount(provider, dispatch);
    });
    
    window.ethereum.on("chainChanged", () => {
      window.location.reload();
    });
    
    const fir = loadFIR(provider, fir_config.address, dispatch);
    loadAllData(provider, fir, dispatch);
    subscribeToEvents(fir, dispatch);
  };

  useEffect(() => {
    loadBlockchainData();
  }, []); // Adding empty dependency array to run only once

  return (
    <div className="App">
      <Navbar />
      <Option />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/Data" element={<Data />} />
      </Routes>
      <Alert/>
    </div>
  );
}

export default App;