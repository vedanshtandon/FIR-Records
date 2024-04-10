/*
  @ Testing Solidity smart contract -> 'MedicalRecord.sol'
  @ importing ethers from hardhat which is a development environment for ethereum smart contracts
  @ importing expect to make assertions in test
*/
const { expect } = require("chai");
const { ethers } = require("hardhat");

/*
  Describes a test suits 
  step 1 :  Retrieves ethereum accounts available in hardhat network using get signers
  step 2 :  select a user
  step 3 :  Retrieves the contract factory for the "MedicalRecords" contract.
  step 4 :  Deploys an instance of Medical Record contract
*/

describe("FIRRecords", () => {
  let user1, fir, transactionResponse, transactionReceipt;
  beforeEach(async () => {
    const account = await ethers.getSigners();
    user1 = account[1];
    const FIR = await ethers.getContractFactory("FIRRecords");
    fir = await FIR.connect(user1).deploy();
  });



  describe("Deployment", () => {
    it("The contract is deployed successfully", async () => {
      expect(await fir.address).to.not.equal(0);
    });
  });



  /* 
    Describes a test suite for Adding a Record
  */
  describe("Add Record", () => {
    beforeEach(async () => {
      transactionResponse = await fir.connect(user1).addRecord(
        "Vedansh",
        "7355604117",
        "Aadhar",
        "1234569870",
        "Prayagraj",
        "Prayagraj",
        "Prayagraj",
        "ipfsHash"
      );
      transactionReceipt = await transactionResponse.wait();
    });


    it("Emits a Add Record event", async () => {

      if (transactionReceipt.events === undefined || transactionReceipt.events.length === 0) {
        console.error("No events emitted during the transaction");
        return;
      }

      const event = await transactionReceipt.events[0];
      expect(event.event).to.equal("FIRRecords__AddRecord");

      const args = event.args;
      expect(args.timestamp).to.not.equal(0);
      expect(args.name).to.equal("Vedansh");
      expect(args.phone_number).to.equal("7355604117");
      expect(args.government_id).to.equal("Aadhar");
      expect(args.id_number).to.equal("1234569870");
      expect(args.address1).to.equal("Prayagraj");
      expect(args.police_station).to.equal("Prayagraj");
      expect(args.report).to.equal("Prayagraj");
      expect(args.ipfsHash).to.equal("ipfsHash");

    });


    it("The getRecords function is working", async () => {
      const [
        timestamp,
        name,
        phone_number,
        government_id,
        id_number,
        address1,
        police_station,
        report,
        ipfsHash
      ] = await fir.getRecord(await fir.getRecordId());
      expect(await fir.getRecordId()).to.equal(1);
      expect(timestamp).to.not.equal(0);
      expect(name).to.equal("Vedansh");
      expect(phone_number).to.equal("7355604117");
      expect(government_id).to.equal("Aadhar");
      expect(id_number).to.equal("1234569870");
      expect(address1).to.equal("Prayagraj");
      expect(police_station).to.equal("Prayagraj");
      expect(report).to.equal("Prayagraj");
      expect(ipfsHash).to.equal("ipfsHash");
    });
  });


  /*
    Describes a test suite for Deleting a Record
  */
  describe("The delete function is working", () => {
    beforeEach(async () => {
      transactionResponse = await fir.addRecord(
        "Vedansh",
        "7355604117",
        "Aadhar",
        "1234569870",
        "Prayagraj",
        "Prayagraj",
        "Prayagraj",
        "ipfsHash"
      );
      transactionReceipt = await transactionResponse.wait();
      transactionResponse = await fir.deleteRecord(1);
      transactionReceipt = await transactionResponse.wait();
    });
    
    // checks whether the record has been deleted or not
    it("The record is deleted ", async () => {
      expect(await fir.getDeleted(1)).to.be.equal(true);
    });

    it("Emits a delete event", async () => {

      if (transactionReceipt.events === undefined || transactionReceipt.events.length === 0) {
        console.error("No events emitted during the transaction");
        return;
      }

      const event = await transactionReceipt.events[0];
      const args = event.args;
      expect(event.event).to.equal("FIRRecords__DeleteRecord");
      expect(args.timestamp).to.not.equal(0);
      expect(args.name).to.equal("Vedansh");
      expect(args.phone_number).to.equal("7355604117");
      expect(args.government_id).to.equal("Aadhar");
      expect(args.id_number).to.equal("1234569870");
      expect(args.address1).to.equal("Prayagraj");
      expect(args.police_station).to.equal("Prayagraj");
      expect(args.report).to.equal("Prayagraj");
      expect(args.ipfsHash).to.equal("ipfsHash");
    });
  });

});