import React, { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Fetching");
  }, []);

  return (
    <>
      {`Hello Demo App ${name}`}
    </>
  );
}

export default App;
