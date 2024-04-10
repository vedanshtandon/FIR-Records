// Interacts with the Ethereum BlockChian Network


// const axios = require('axios');

import { ethers } from "ethers";
import FIR_ABI from "../abis/FIRRecords.json";
import axios from "axios";

// import { method } from "lodash";


// const pinataSDK = require('@pinata/sdk');
// const PinataApiKey = '4d38e53beab249f26013'
// const PinataApisecret ='0e85cc146c0668ad229b130661b2ee9c1f0a3b8d291d9135b9aa06088adbdfe2'
// const pinata = pinataSDK('4d38e53beab249f26013','0e85cc146c0668ad229b130661b2ee9c1f0a3b8d291d9135b9aa06088adbdfe2');


export const loadProvider = (dispatch) => {
  const connection = new ethers.providers.Web3Provider(window.ethereum);
  dispatch({ type: "PROVIDER_LOADED", connection });
  console.log("Provider Loaded");
  return connection;
};

/*
Loading Network network like Local Host , Sebolia 
*/
export const loadNetwork = async (provider, dispatch) => {
  const { chainId } = await provider.getNetwork();
  dispatch({ type: "NETWORK_LOADED", chainId });
  console.log("Network Loaded");
  return chainId;

};


/*
Loading User Account - Getting Details like Public Address and User Balance
*/
export const loadAccount = async (provider, dispatch) => {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = ethers.utils.getAddress(accounts[0]);
  dispatch({ type: "ACCOUNT_LOADED", account });
  let balance = await provider.getBalance(account);
  balance = ethers.utils.formatEther(balance);
  dispatch({ type: "ETHER_BALANCE_LOADED", balance });
  console.log("Account Loaded");
  return account;
};


/*
Loading Medical Data from an adress 
*/
export const loadFIR = (provider, address, dispatch) => {
  const fir = new ethers.Contract(address, FIR_ABI, provider);
  dispatch({ type: "FIR_LOADED", fir });
  console.log("FIR Loaded");
  return fir;
};

export const loadAllData = async (provider, fir, dispatch) => {
  const block = await provider.getBlockNumber();
  const firStream = await fir.queryFilter(
    "FIRRecords__AddRecord",
    0,
    block
  );
  const firRecords = firStream.map((event) => event.args);
  console.log("loading fir records", firRecords)
  dispatch({ type: "ALL_FIR_RECORDS", firRecords });
  const deleteStream = await fir.queryFilter(
    "FIRRecords__DeleteRecord",
    0,
    block
  );
  console.log("All Data loaded");
  const deleteRecords = deleteStream.map((event) => event.args);
  dispatch({ type: "ALL_DELETED_RECORDS", deleteRecords });
};



/* 
A transaction to Submit a new Record to the Samrt Contract
*/
export const submitRecord = async (
  name,
  phone_number,
  government_id,
  id_number,
  address1,
  police_station,
  report,
  provider,
  fir,
  dispatch
) => {
  let transaction;
  dispatch({ type: "NEW_RECORD_LOADED" });
  console.log("Submit Recoed")
  try {
    const signer = await provider.getSigner();

    const data = JSON.stringify({
      name, phone_number, government_id,
      id_number,
      address1,
      police_station,
      report,
    });
    // console.log(data)


    // const pinataJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJhYjBkNTk4MS03ZWQxLTQ3YmQtOTU3Ny0xNzlmNjc0ZDFhOTkiLCJlbWFpbCI6InZlZGFuc2h0YW5kb24yMDJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjRkMzhlNTNiZWFiMjQ5ZjI2MDEzIiwic2NvcGVkS2V5U2VjcmV0IjoiMGU4NWNjMTQ2YzA2NjhhZDIyOWIxMzA2NjFiMmVlOWMxZjBhM2I4ZDI5MWQ5MTM1YjlhYTA2MDg4YWRiZGZlMiIsImlhdCI6MTcxMjQyNDY0NX0.jaODx_Gm8HjfT3cfe7bfjHLWigyurDB8IxU5-6la5Rg';

    const pinataAPI = axios.create({
      baseURL: 'https://api.pinata.cloud/',
      headers: {
        'Content-Type': 'application/json',
        'pinata_api_key': '4d38e53beab249f26013',
        'pinata_secret_api_key': '0e85cc146c0668ad229b130661b2ee9c1f0a3b8d291d9135b9aa06088adbdfe2'
      }
    });
    pinataAPI.post('/pinning/pinJSONToIPFS', data)
      .then(async (response) => {
        console.log(response.data); // Handle successful response
        alert(response.data.IpfsHash)

        transaction = await fir
          .connect(signer)
          .addRecord(name, phone_number, government_id, id_number, address1, police_station, report, response.data.IpfsHash);
        console.log("New Transaction added")
        await transaction.wait();
      })
      .catch(error => {
        console.error(error.response.data); // Handle error
      });


  } catch (error) {
    console.log("Action Failed")
    dispatch({ type: "NEW_RECORD_FAIL" });
  }
};

/* 
A transaction to delete the Medical record
All the transactions are stored in a Ethereum Block chain and are traceable
*/
export const deleteData = async (fir, recordId, dispatch, provider) => {
  let transaction;
  dispatch({ type: "DELETE_REQUEST_INNITIALIZED" });
  try {
    const signer = await provider.getSigner();
    transaction = await fir.connect(signer).deleteRecord(recordId);
    await transaction.wait();
  } catch (error) {
    dispatch({ type: "DELETE_REQUEST_FAILED" });
  }
};


/* 
Subscribing to the events of smart contracts to make interaction of Node JS with ethereum block chain
Events Subscribed :  MedicalRecord_AddRecord , MedicalRecord_DeleteRecord
*/
export const subscribeToEvents = async (fir, dispatch) => {
  fir.on(
    "FIRRecords__AddRecord",
    (
      recordId,
      timestamp,
      name,
      phone_number,
      government_id,
      id_number,
      address1,
      police_station,
      report,
      ipfsHash,
      event
    ) => {
      const firOrder = event.args;
      dispatch({ type: "NEW_RECORD_SUCCESS", firOrder, event });
    }
  );
  fir.on(
    "FIRRecords__DeleteRecord",
    (
      recordId,
      timestamp,
      name,
      phone_number,
      government_id,
      id_number,
      address1,
      police_station,
      report,
      ipfsHash,
      event
    ) => {
      const deleteOrder = event.args;
      dispatch({ type: "DELETE_REQUEST_SUCCESS", deleteOrder, event });
    }
  );
};
