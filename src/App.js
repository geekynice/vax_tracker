import { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./components/dashboard";
import logo from "./logo.png";
import Footer from "./components/footer"; 

const App = () => {
  const [families, setVaccine] = useState(null);

  const fetchData = async () => {
    const familyData = await axios.get("http://localhost:8000/tracker");
    const data = Object.keys(familyData.data.data).map(
      (family) => familyData.data.data[family]
    );
    setVaccine(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(families);

  return (
    <div className="App jumbotron">
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
      </nav>
      <div className="dashboard p-5">
        <div className="container">
          <h1 className="mb-5 text-center">Community Vaccine Tracker</h1>
          <Dashboard families={families} />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
