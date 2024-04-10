// SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract FIRRecords {
    uint public recordId;
    mapping(uint => Record) records;
    mapping(uint => bool) public isDeleted;

    // Making a User Defined Data Type for FIR Record using struct
    struct Record {
        uint recordId;
        uint timestamp;
        string name;
        string phone_number;
        string government_id;
        string id_number;
        string address1;
        string police_station;
        string report;
        string ipfsHash; // New field to store IPFS hash
    }

    /*
    When an event is emitted within a Solidity contract, 
    external applications, such as a Node.js application, 
    can listen for these events and react accordingly. 
    In this case, a Node.js application could listen for this event
    and take actions such as updating a user interface, storing the event data in a database, 
    or triggering further smart contract interactions based on the emitted event.

    Emit Keyword is used to trigger an event
    Events are used to notify external applications about specific actions
    */


    // Notifies the external application that an event is triggered to Add a New Record
    event FIRRecords__AddRecord(
        uint recordId,
        uint timestamp,
        string name,
        string phone_number,
        string government_id,
        string id_number,
        string address1,
        string police_station,
        string report,
        string ipfsHash // New field to store IPFS hash
    );

    // Notifies the external application that an event is triggered to Delete an existing Record
    event FIRRecords__DeleteRecord(
        uint recordId,
        uint timestamp,
        string name,
        string phone_number,
        string government_id,
        string id_number,
        string address1,
        string police_station,
        string report,
        string ipfsHash // New field to store IPFS hash
    );

    // Function to Add a Record 
    function addRecord(
        string memory _name,
        string memory _phone_number,
        string memory _government_id,
        string memory _id_number,
        string memory _address1,
        string memory _police_station,
        string memory _report,
        string memory _ipfsHash
    ) public {
        recordId++;
        records[recordId] = Record(
            recordId,
            block.timestamp,
            _name,
            _phone_number,
            _government_id,
            _id_number,
            _address1,
            _police_station,
            _report,
            _ipfsHash
        );
        emit FIRRecords__AddRecord(
            recordId,
            block.timestamp,
            _name,
            _phone_number,
            _government_id,
            _id_number,
            _address1,
            _police_station,
            _report,
            _ipfsHash
        );
    }


    // Function to delete a Medical Record
    function deleteRecord(uint _recordId) public {
        require(!isDeleted[_recordId], "The record is already deleted");
        // Record stor_phone_number record = records[_recordId];
        Record storage record = records[_recordId];
        emit FIRRecords__DeleteRecord(
            record.recordId,
            block.timestamp,
            record.name,
            record.phone_number,
            record.government_id,
            record.id_number,
            record.address1,
            record.police_station,
            record.report,
            record.ipfsHash
        );
        isDeleted[_recordId] = true;
    }

    // Function to retrieve information about a medical record
    function getRecord(
        uint _recordId
    )
        public
        view
        returns (
            uint,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        // Record stor_phone_number record = records[_recordId];
        Record storage record = records[_recordId];
        return (
            record.timestamp,
            record.name,
            record.phone_number,
            record.government_id,
            record.id_number,
            record.address1,
            record.police_station,
            record.report,
            record.ipfsHash
        );
    }


    // Getter Functions to retreieve informations about a particular Medical Record
    function getRecordId() public view returns (uint) {
        return recordId;
    }

    function getTimeStamp(uint _recordId) public view returns (uint) {
        return records[_recordId].timestamp;
    }

    function getName(uint _recordId) public view returns (string memory) {
        return records[_recordId].name;
    }

    function get_phone_number(uint _recordId) public view returns (string memory) {
        return records[_recordId].phone_number;
    }

    function getGovernmentId(uint _recordId) public view returns (string memory) {
        return records[_recordId].government_id;
    }

    function getIdNumber(uint _recordId) public view returns (string memory) {
        return records[_recordId].id_number;
    }

    function getAddress(uint _recordId) public view returns (string memory) {
        return records[_recordId].address1;
    }

    function getPoliceStation(uint _recordId) public view returns (string memory) {
        return records[_recordId].police_station;
    }

    function getReport(uint _recordId) public view returns (string memory) {
        return records[_recordId].report;
    }

    function getIpfsHash(uint _recordId) public view returns (string memory) {
        return records[_recordId].ipfsHash;
    }

    function getDeleted(uint256 _recordId) public view returns (bool) {
        return isDeleted[_recordId];
    }
}