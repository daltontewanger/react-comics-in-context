import React from "react";
import "./index.css";
import StylesContext from "./Components/SylesContext";
import UserInterface from "./Components/UserInterface";

function App() {
  const styling = {
    backgrond: "#1ECD97",
    display: "inline-block",
    width: 120,
    height: 55,
    fontSize: 18,
    letterSpacing: 1,
    border: "2px solid #1ECD97",
    borderRadius: 15,
  };

  return (
    <main>
      <StylesContext.Provider value={styling}>
        <h1
          style={{
            color: "#FEE001",
            fontFamily: "Luminari, fantasy",
            fontSize: 50,
          }}
        >
          Welcome to Comics Galore!
        </h1>
        <UserInterface />
      </StylesContext.Provider>
    </main>
  );
}

export default App;
