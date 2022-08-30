import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import Home from './Pages/Home';
import Loader from './Component/Loader';
function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  } , []);

  return (
    <div className="App">
    {loader ? <Loader /> : <Home />}
    </div>

    
  );
}

export default App;
