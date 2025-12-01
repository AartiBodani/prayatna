import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./Search.css";
import NgoCard from "../Cards/NgoCard";
const API = "http://localhost:5000/regngos";
const Search = () => {
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setData(res.data);
        setInitialData(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleSearchInputChange = (e) => {
    const { value } = e.target;
    setData((prev) => {
      return initialData.filter((info) => {
        return (
          value === "" ||
          info.activity.includes(value) ||
          info.address.includes(value) ||
          info.ngo_name.includes(value)
        );
      });
    });
  };

  console.log({ data });

  return (
    <>
      <Navbar />
      <div className="search_top">
        <h3 className="text-center pt-3">Find NGOs</h3>
        <div className="search_container">
          <div className="search_main">
            <input
              className="search_inp"
              type="text"
              name="search"
              onChange={handleSearchInputChange}
              placeholder="Search Your Needs Here....."
            />
            <button type="button" className="SearchIcon">
              <div>
                <SearchIcon sx={{ color: "white", fontSize: "25px" }} />
              </div>
            </button>
          </div>
        </div>
        <NgoCard ngo={data} />
      </div>
    </>
  );
};

export default Search;
