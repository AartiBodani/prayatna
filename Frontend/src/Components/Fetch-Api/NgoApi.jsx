import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NgoApi.css";
const API = "http://localhost:5000/regngos";

const NgoApi = (user) => {
  const [name, setName] = useState(user.name);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(API)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/regngos/${user._id}`, { name });
      alert("User name updated successfully!");
    } catch (err) {
      alert("Error updating user name");
    }
  };

  function deleteUser(userId) {
    axios
      .delete(`/regngos${userId}`)
      .then((response) => {
        console.log("User deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  }
  return (
    <>
      <div className="Container">
        <h3>NGO Data Rendering Page Through API</h3>
        <form onSubmit={handleSubmit}>
          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Trustee Name</th>
              <th>Address</th>
              <th>Activity</th>
              <th colSpan={2}>Action</th>
            </tr>
            {data.map((item) => {
              const { ngo_name, email, head_name, address, activity } = item;

              return (
                <>
                  <tr key={item.id}>
                    {/* <td>{id}</td> */}
                    <td value={name} onChange={(e) => setName(e.target.value)}>
                      {ngo_name}
                    </td>
                    <td>{email}</td>
                    <td>{head_name}</td>
                    <td>{address}</td>
                    <td>{activity}</td>
                    {/* <td>
                    <button style={{ padding: "5px" }}>Edit</button>
                  </td>
                  <td>
                    <button style={{ padding: "5px" }} onSubmit={handleSubmit}>
                      Update
                    </button>
                  </td> */}
                  </tr>
                </>
              );
            })}
          </table>

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
          <button type="submit">Update</button>
        </form>
        <button type="submit" onClick={deleteUser}>
          Delete
        </button>
      </div>
    </>
  );
};

export default NgoApi;
