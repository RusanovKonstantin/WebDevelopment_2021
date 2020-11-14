import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("/api/demo")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return <>Hello</>;
}

export default App;
