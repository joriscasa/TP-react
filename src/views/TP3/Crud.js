export default function Crud({

    employes = {
      firstname: "",
      lastname: "",
      email: "",
      Work_role: "",
      Adress: [],
    },
  }) {
    const [firstname, setFirstname] = useState(employes.firstname);
    const [lastname, setLastname] = useState(employes.lastname);
    const [email, setEmail] = useState(employes.email);
    const [work_role, setwork_role] = useState(employes.work_role);
    const [adress, setadress] = useState(employes.adress);
  
    const [valid, setValid] = useState(false);
    const [date, setDate] = useState(new Date());
  
    useEffect(() => {
      // componentDidUpdate
      setValid(
        firstname.length > 0 &&
          lastname.length > 0 &&
          email.length > 0 &&
          password.length > 0 &&
          adress
      );
      console.log("componentDidUpdate");
      return () => {
        // componentWillUpdate
        console.log("componentWillUpdate");
      };
    }, [firstname, lastname, email, work_role, adress]);
    useEffect(() => {
      //componentDidMount
      console.log("componentDidMount");
      const i = setInterval(() => {
        setDate(new Date());
        console.log(new Date());
      }, 1000);
      return () => {
        //componentWillUnmount
        console.log("componentWillUnmount");
        clearInterval(i);
      };
    }, []);
  
    function handleChange(e) {
      const tagName = e.target.tagName;
      const name = e.target.name;
      let value;
      if (tagName === "INPUT") {
        const type = e.target.type;
        if (type === "checkbox") {
          value = e.target.checked;
        } else {
          value = e.target.value;
        }
      } else if (tagName === "SELECT") {
        value = Array.from(e.target.options)
          .filter((option) => option.selected)
          .map((option) => option.value);
      }
      switch (name) {
        case "firstname":
          setFirstname(value);
          break;
        case "lastname":
          setLastname(value);
          break;
        case "email":
          setEmail(value);
          break;
        case "work_role":
          setPassword(value);
          break;
        case "adress":
          setSkills(value);
          break;
      }
    }
  
    return (
      <form autoComplete="off">
        <div>{date.toISOString()}</div>
        <input
          value={lastname}
          name="lastname"
          type="text"
          required
          onChange={handleChange}
        />
        <input
          value={firstname}
          name="firstname"
          type="text"
          required
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          required
          value={email}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          name="work_role"
          type="text"
          required
          value={password}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
            name="adress"
            type="text"
            required
            value={password}
            onChange={handleChange}
            autoComplete="off"
        />
        <select multiple name="skills" onChange={handleChange}>
          <option value="php">PHP</option>
          <option value="js">JS</option>
          <option value="react">React</option>
        </select>
        <input
          name="aggreement"
          type="checkbox"
          required
          value={rgpd}
          onChange={handleChange}
        />
        <input disabled={!valid} type="submit" value="Submit" />
      </form>
    );
  }
  