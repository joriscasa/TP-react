import { useState } from "react";
import Crud from "./views/TP3/Crud";

function App() {
  const [displayForm, setDisplayForm] = useState(true);
  return (
    <>
      <crud />
      <Crud>
      </Crud>
      <button onClick={() => setDisplayForm(!displayForm)}>Display</button>
      {displayForm && <UserForm />}
      {displayForm && (
        <UserForm
          user={{
            firstname: "myfirst",
            lastname: "mylast",
            email: "myfirst.mylast@email.com",
            work_role: "",
            adress: [],
          }}
        />
      )}
    </>
  );
}

export default App;
