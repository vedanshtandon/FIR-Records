import React from "react";
import "./navbar.css";
import healthReport from "../../assets/fir-report.png";
import wallet from "../../assets/wallet.png";
import { loadAccount } from "../../store/interactions";
import { useDispatch, useSelector } from "react-redux";
import Blockies from "react-blockies";
import config from "../../config.json";
const Navbar = () => {
  const dispatch = useDispatch();
  const provider = useSelector((state) => state.provider.connection);
  const account = useSelector((state) => state.provider.account);
  const balance = useSelector((state) => state.provider.balance);
  const chainId = useSelector((state) => state.provider.chainId);
  const connectHandler = async (e) => {
    await loadAccount(provider, dispatch);
  };
  const networkHandler = async (e) => {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [
        {
          chainId: e.target.value,
        },
      ],
    });
  };
  return (
    <div className="Navbar">
      <div className="nav__name">
        <img src={healthReport} alt="" width="55" height="100" style={{ borderRadius: 5}}/>
        <h2> FIR Portal </h2>
      </div>
      <div className="nav__networkSelector">
        <select
          name="network"
          id="network"
          onChange={networkHandler}
          value={config[chainId] ? `0x${chainId.toString(16)}` : `0`}
        >
          <option value="0" disabled>
            Select Network
          </option>
          <option value="31337">Localhost</option>
          <option value="0xAA36A7">Sepolia</option>
          {/* <option value="0x5">Goerli</option>
          <option value="0x13881">Mumbai</option> */}
        </select>
      </div>
      <div className="nav__balance">
      <img src={wallet} alt="" width="45" height="60" style={{ borderRadius: 5, margin:10}}/>
        {balance ? (
          <p className="nav__myBalance">
            <small>My Balance : </small>
            {Number(balance).toFixed(4)}
          </p>
        ) : (
          <p className="nav__myBalance">
            <large><b>My Balance :</b> </large>
            0 ETH  
          </p>
        )}
        <div style={{ marginRight: '15px' }} /> {/* Empty div for spacing */}
        {account ? (
          <a className="nav__myAccount" href="#">
            <Blockies
              seed={account}
              size={14}
              scale={3}
              color="FFC94A"
              bgColor="4CCD99"
              spotColor="#767F92"
              className="identicon"
            />
            {account.slice(0, 5) + "...." + account.slice(38, 42)}
          </a>
        ) : (
          <button className="nav__balance-box" onClick={connectHandler}>
            Connect
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
