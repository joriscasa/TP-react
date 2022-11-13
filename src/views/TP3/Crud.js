import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [nom, setNom] = useState("");
  const [age, setAge] = useState(0);
  const [adresse, setAdresse] = useState("");
  const [position, setPosition] = useState("");
  const [salaire, setSalaire] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3000/create", {
      nom: nom,
      age: age,
      adresse: adresse,
      position: position,
      salaire: salaire,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          nom: nom,
          age: age,
          adresse: adresse,
          position: position,
          salaire: salaire,
        },
      ]);
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3000/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const updateEmployeeWage = (id) => {
    Axios.put("http://localhost:3000/update", { salaire: setNewWage, id: id }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  nom: val.nom,
                  adresse: val.adresse,
                  age: val.age,
                  position: val.position,
                  salaire: val.Salaire,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3000/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div className="App">
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
          type="number"
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
        <button onClick={addEmployee}>Ajouter un Employé</button>
      </div>
      <div className="employees">
        <button onClick={getEmployees}>Montrer les Employés</button>

        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h1>Nom: {val.name}</h1>
                <h2>Age: {val.age}</h2>
                <h3>Adresse: {val.adresse}</h3>
                <h4>Position: {val.position}</h4>
                <h5>salaire: {val.salaire}</h5>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setNewWage(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateEmployeeWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
