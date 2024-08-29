import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Merci de remplir toutes les informations !");
    }
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email: email, password: password }
      );
      console.log(response.data);
      const token = response.data.token;
      Cookies.set("token", token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Se connecter</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Adresse email"
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
        <button>Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
