import "./App.css";
import { GlobalContext } from "./context/GlobalContext";
import Router from "./router/Router";
// import Volunteer from "./Components/Volunteer/Volunteer.jsx";
// import "../public/style.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Navbar from "./Components/Navbar";
// import Signup from "./Pages/Signup";
// import SignIn from "./Pages/SignIn";
// import Form from "./Components/Form";

const App = () => {
  return (
    <>
      <GlobalContext>
        <Router />
        {/* <Volunteer/> */}
      </GlobalContext>
    </>
  );
};

export default App;
