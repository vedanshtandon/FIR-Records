import React, { useState } from "react";
import "./form.css";
import { submitRecord } from "../../store/interactions";
import { useDispatch, useSelector } from "react-redux";
const Form = () => {
  const provider = useSelector((state) => state.provider.connection);
  const fir = useSelector((state) => state.fir.contract);
  const account=useSelector((state)=>state.provider.account);
  const dispatch = useDispatch();

/*
Submit Event Handler : On Submission of Form
Creating a Form to take data
*/
  const submitHandler = (e) => {
    e.preventDefault();
    submitRecord(
      name,
      phone_number,
      government_id,
      id_number,
      address,
      police_station,
      report,
      provider,
      fir,
      dispatch
    );
    setName(0);
    setPhoneNumber(0);
    setGovernmentId(0);
    setIdNumber(0);
    setAddress(0);
    setPoliceStationName(0);
    setReport(0);
  };
  const [name, setName] = useState(0);
  const [phone_number, setPhoneNumber] = useState(0);
  const [government_id, setGovernmentId] = useState(0);
  const [id_number, setIdNumber] = useState(0);
  const [address, setAddress] = useState(0);
  const [police_station, setPoliceStationName] = useState(0);
  const [report, setReport] = useState(0);

  return (
    <div className="login-container">
      <h1></h1>
    {account?( <form onSubmit={submitHandler}>
        <h1>FIR Form</h1>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name === 0 ? "" : name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter Your Name"
        />

        <label htmlFor="age">Phone Number</label>
        <input
          type="text"
          id="age"
          name="age"
          required
          placeholder="Enter Your Phone Number"
          value={phone_number === 0 ? "" : phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label htmlFor="gender">Government ID:</label>
        <select
          id="gender"
          name="gender"
          required
          onChange={(e) => setGovernmentId(e.target.value)}
          value={government_id === 0 ? "" : government_id}
        >
          <option value="">Select ID</option>
          <option value="Aadhar Card">Aadhar Card</option>
          <option value="PAN Card">PAN Card</option>
          <option value="Driving License">Driving License</option>
          <option value="Passport">Passport</option>
          <option value="VoterID">Voter ID</option>
        </select>

        <label htmlFor="address">ID Number</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Enter ID Number"
          value={id_number === 0 ? "" : id_number}
          onChange={(e) => setIdNumber(e.target.value)}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Enter Address"
          value={address === 0 ? "" : address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="address">Police Station Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Enter nearby police station name"
          value={police_station === 0 ? "" : police_station}
          onChange={(e) => setPoliceStationName(e.target.value)}
        />
        <label htmlFor="address">Report</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={report === 0 ? "" : report}
          onChange={(e) => setReport(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>):(
        <h1>Connect the account</h1>
      )}
     
    </div>
  );
};

export default Form;
