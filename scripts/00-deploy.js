const { ethers } = require("hardhat");
async function main() {
  console.log("Deploying smart contract...");
  const FIR = await ethers.getContractFactory("FIRRecords");
  const account = await ethers.getSigners();
  const fir = await FIR.connect(account[0]).deploy();
  await fir.deployed();
  console.log(fir)
  console.log(`FIR is deployed in address ${fir.address}`);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
