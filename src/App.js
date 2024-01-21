import logo from "./logo.svg";
import "./App.css";
import Scanner from "./componens/Scanner";
import { useEffect, useState } from "react";
import {ToastContainer, toast} from 'react-toastify';

function App() {
  const [isScan, setIsScan] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (result) {
      // alert(result);
      const dateCreated = new Date();
      dateCreated.setTime(result?.timestamp);
      console.log(result?.text);
      console.log(dateCreated.toISOString());
      setIsScan(false);
    }
  }, [result]);

  const toggleScanBtn = () => {
    if (isScan) {
      setIsScan(false);
    } else {
      setResult(null);
      setIsScan(true);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={toggleScanBtn}>{isScan ? "Close" : "Scan"}</button>
      </header>
      <div>{isScan && <Scanner onScan={(e) => setResult(e)} />}</div>
    </div>
  );
}

export default App;
