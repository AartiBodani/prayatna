import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const Context = createContext();

const GlobalContext = ({ children }) => {
  const [state, setState] = useState({
    userType: "withoutLogin",
  });

  const setUserData = async () => {
    if (localStorage.getItem("token")) {
      const res = await axios.post("/token-data", {
        token: localStorage.getItem("token"),
      });
      const { userData } = res.data;
      let userType;
      if (userData.ngo_name) {
        userType = "ngo";
      } else {
        userType = "user";
      }
      setState({
        userType,
        userData,
      });
    } else {
      setState({
        userType: "withoutLogin",
      });
    }
  };

  useEffect(() => {
    setUserData();
  }, []);
  return (
    <Context.Provider value={{ state, setState, setUserData }}>
      {children}
    </Context.Provider>
  );
};

const useGlobalContext = () => {
  const res = useContext(Context);
  if (!res) {
    return null;
  }
  return res;
};

export { GlobalContext, useGlobalContext };
