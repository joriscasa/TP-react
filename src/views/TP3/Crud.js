import { useState, useEffect } from "react";

function App() {
  const [nom, setNom] = useState("");
  const [age, setAge] = useState(0);
  const [adresse, setAdresse] = useState("");
  const [position, setPosition] = useState("");
  const [salaire, setSalaire] = useState(0);
  const [id, setId] = useState(0);

  const[edit, setEdit] = useState(false);

  const [employeeList, setEmployeeList] = useState([]);

  async function addEmployee  () {
    const data = await fetch ("http://localhost:5000/employes", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        nom: nom,
        age: age,
        adresse: adresse,
        position: position,
        salaire: salaire,
      }),
    });
    getEmployees();
    setNom("");
    setAge(0);
    setAdresse("");
    setPosition("");
    setSalaire(0);
  };

  async function getEmployees () {
    const data = await fetch("http://localhost:5000/employes");
    const employees = await data.json();
    console.log(employees);
    setEmployeeList(employees);
  
  };
  useEffect(() => { 
    getEmployees();
  }, []);

  async function deleteEmployee (id) {
    const data = await fetch(`http://localhost:5000/employes/${id}`, {
      method: "DELETE",
    });
    getEmployees();
  };
 async function updateEmployee (id) {
    const data = await fetch(`http://localhost:5000/employes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nom: nom,
        age: age,
        adresse: adresse,
        position: position,
        salaire: salaire,
      }),
    });
    getEmployees();
    setNom("");
    setAge(0);
    setAdresse("");
    setPosition("");
    setSalaire(0);
    setEdit(false);
  };

  async function getEmployee (id) {
    const data = await fetch(`http://localhost:5000/employes/${id}`);
    const employee = await data.json();
    setNom(employee.nom);
    setAge(employee.age);
    setAdresse(employee.adresse);
    setPosition(employee.position);
    setSalaire(employee.salaire);
    setId(employee.id);
    setEdit(true);
  };

  function submit (e) {
    e.preventDefault();
    if (edit) {
      updateEmployee(id);
    } else {
      addEmployee();
    }
  };

  return (
    <div className="App">
      <div className="information">
        <form onSubmit={submit}>
        <label>Nom:</label>
        <input
          type="text"
          onChange={(event) => {
            setNom(event.target.value);
          }}
          value = {nom}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
          value = {age}
        />
        <label>Adresse:</label>
        <input
          type="text"
          onChange={(event) => {
            setAdresse(event.target.value);
          }}
          value = {adresse}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
          value = {position}
        />
        <label>Salaire (mois):</label>
        <input
          type="number"
          onChange={(event) => {
            setSalaire(event.target.value);
          }}
          value = {salaire}
        />
        <button type="submit">{ edit ? "modifier":"ajouter"}</button>
        </form>
      </div>
      <div className="employes">
        {/* <button onClick={getEmployees}>Montrer les Employés</button> */}

        {employeeList.map((employe) => (
            <div className="employes"key = {employe.id}>
              <div>
                <h1>Nom: {employe.nom}</h1>
                <h2>Age: {employe.age}</h2>
                <h3>Adresse: {employe.adresse}</h3>
                <h4>Position: {employe.position}</h4>
                <h5>salaire: {employe.salaire}</h5>
              </div>
              <div>
                <button
                  onClick={() => {
                    getEmployee(employe.id);
                  }}
                >
                  Mise à jour 
                </button>

                <button
                  onClick={() => {
                    deleteEmployee(employe.id);
                  }}
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
