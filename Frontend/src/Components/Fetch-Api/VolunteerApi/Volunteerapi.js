import axios from "axios";
import "./Volunteerapi.css";
import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar.jsx";

const Volunteerapi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/volunteer")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <Navbar />
      <div className="cotainer mt-2 text-center">
        <h3>Volunter Details :</h3>
        <div class=" container table-responsive">
          <table className="table table-hover">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Contact_number</th>
              <th>Occupation</th>
              <th>Activity</th>
            </tr>
            {data.map((item) => {
              const {
                fname,
                lname,
                address,
                activity,
                occupation,
                gender,
                email,
                contact_number,
              } = item;

              return (
                <>
                  <tr key={item.id}>
                    <td>{fname}</td>
                    <td>{lname}</td>
                    <td>{email}</td>
                    <td>{gender}</td>
                    <td>{address}</td>
                    <td>{contact_number}</td>
                    <td>{occupation}</td>
                    <td>{activity}</td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Volunteerapi;
