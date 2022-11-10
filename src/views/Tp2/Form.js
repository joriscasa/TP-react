import { useEffect, useState } from "react";

/**
 * Créer un formulaire de création de compte utilisateur.
 *
 * Gestion 100% en React.
 *
 * - Nom (required)
 * - Prénom (required)
 * - Email (required)
 * - Mot de passe (required)
 * - Compétences (multi-select/tags) (ex: PHP, JS, React, ...)
 * - RGPD (checkbox/required)
 * - Bouton de soumission (uniquement si tous les champs sont valides)
 *
 * A la soumission du formulaire, compiler les champs dans un objet et l'afficher.
 * + un message de succès.
 *
 * Bonus: possibilité de pré-remplir les champs avec des données utilisateur
 */
export default function UserForm({
  user = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    skills: [],
    rgpd: false,
  },
}) {
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [skills, setSkills] = useState(user.skills);
  const [rgpd, setRgpd] = useState(user.rgpd);
  const [valid, setValid] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // componentDidUpdate
    setValid(
      firstname.length > 0 &&
        lastname.length > 0 &&
        email.length > 0 &&
        password.length > 0 &&
        rgpd
    );
    console.log("componentDidUpdate");
    return () => {
      // componentWillUpdate
      console.log("componentWillUpdate");
    };
  }, [firstname, lastname, email, password, rgpd]);
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
      case "password":
        setPassword(value);
        break;
      case "skills":
        setSkills(value);
        break;
      case "aggreement":
        setRgpd(value);
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
        name="password"
        type="password"
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
