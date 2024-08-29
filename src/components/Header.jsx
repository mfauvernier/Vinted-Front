import logo from "../img/vinted9809.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="logo-vinted" />
        <input
          type="search"
          name="site-search"
          placeholder="Recherche des articles"
          id="site-search"
        />
        <div className="sign-up">
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
          <button>Se connecter</button>
        </div>
        <button className="sell">Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
