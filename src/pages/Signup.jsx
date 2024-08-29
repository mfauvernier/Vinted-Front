import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !email || !password) {
      alert("Merci de bien vouloir remplir toutes les informations !");
    }
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { username: name, email: email, password: password }
      );
      console.log(response.data);
      alert("Inscription réussie !");
      const token = response.data.token;
      Cookies.set("token", token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // mederic // mederic@email.fr // password : abcde

  return (
    <div className="signup-container">
      <h2>S'inscrire</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          name="username"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="checkbox-container">
          <input type="checkbox" />
          <span>S'inscrire à notre newsletter</span>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <button>S'inscrire</button>
      </form>
    </div>
  );
};

export default Signup;
