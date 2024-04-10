import React from "react";
import "./data.css";
import { dataBookSelector } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteData } from "../../store/interactions";

const Data = () => {
  const orderData = useSelector(dataBookSelector);
  const account = useSelector((state) => state.provider.account);
  const provider = useSelector((state) => state.provider.connection);
  const fir = useSelector((state) => state.fir.contract);
  const dispatch = useDispatch();

  // Delete event Handler
  const deleteHandler = (e, data) => {
    if (window.confirm("Do you want to delete the record?")) {
      deleteData(fir, data.recordId, dispatch, provider);
    } else {
      console.log("Data not delete");
    }
  };
  return (
    <div>
      {account ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Record ID</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Government ID</th>
                <th>ID Number</th>
                <th>Address</th>
                <th>Police Station</th>
                <th>Report</th>
                <th>IPFS Hash</th>
                <th>Data and Time</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {orderData &&
                orderData.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      {/* <td>{data.recordIdNew}</td> */}
                      
                      <td>{data.name}</td>
                      <td>{data.phone_number} </td>
                      <td>{data.government_id}</td>
                      <td>{data.id_number}</td>
                      <td>{data.address1}</td>
                      <td>{data.police_station}</td>
                      <td>{data.report}</td>
                      <td>{data.ipfsHash}</td>
                      <td>{data.formattedTimestamp}</td>
                      <td>
                        <button
                          className="delete-button"
                          onClick={(e) => deleteHandler(e, data)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>Connect the account</h1>
      )}
    </div>
  );
};

export default Data;
