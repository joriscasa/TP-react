import "./App.css";
import { useState } from "react";

function App() {
  const [nom, setNom] = useState("");
  const [age, setAge] = useState(0);
  const [adresse, setAdresse] = useState("");
  const [position, setPosition] = useState("");
  const [salaire, setSalaire] = useState(0);

  const[employeeList, setEmployeeList] = useState([]);


  return (
    <div className="Crud">
      <div className="information">
        <label>Nom:</label>
        <input
          type="text"
          onChange={(event) => {
            setNom(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Adresse:</label>
        <input
          type="text"
          onChange={(event) => {
            setAdresse(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Salaire (mois):</label>
        <input
          type="number"
          onChange={(event) => {
            setSalaire(event.target.value);
          }}
        />
              </div>
            </div>
          );
}

export default App;