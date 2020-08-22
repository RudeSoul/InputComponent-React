import React from "react";
import "./App.css";
import InputComponent from "./components/InputComponent";

function App() {
  return (
    <div className="App">
      <InputComponent
        formwidth="fw-200"
        type="email"
        name="email"
        label="Email"
      ></InputComponent>
    </div>
  );
}

export default App;
