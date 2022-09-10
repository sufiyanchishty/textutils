// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";

function App() {
  
  const [mode, setMode] = useState("light"); //wether dark mode enable
  const [alert, setAlert] = useState("null");
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert(" :Dark mode has been enabled", "success ");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" :Light mode has been enabled", "success ");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
    <div>
      <Navbar
        title="TextUtiles"
        home="Home Page"
        about="About Page"
        mode={mode}
        toggleMode={toggleMode}
      />
      </div>
      <div><Alert alert={alert} /></div>
      
     <div className="conttainer">
      <TextForm
        showAlert={showAlert}
        heading="Enter the text to analyze"
        subheading="Enter your text"
        mode={mode}
      />
      </div>
      
      {/* <div className="container my-5 mx-3"><About/></div> */}
      
    </>
  );
}

export default App;
