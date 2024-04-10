// hardhat.config.js
// require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.21",
    settings: {
      evmVersion: "shanghai",
    },
  },
};