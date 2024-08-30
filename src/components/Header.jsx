import logo from "../img/vinted9809.jpg";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ isConnected, setIsConnected }) => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo-vinted" />
        </Link>
        <input
          type="search"
          name="site-search"
          placeholder="Recherche des articles"
          id="site-search"
        />
        {isConnected ? (
          <div>
            <button
              className="delete"
              onClick={() => {
                setIsConnected(false);
                Cookies.remove("token");
              }}
            >
              Se deconnecter
            </button>
          </div>
        ) : (
          <div className="sign-up">
            <Link to="/signup">
              <button>S'inscrire</button>
            </Link>
            <Link to="/login">
              <button>Se connecter</button>
            </Link>
          </div>
        )}

        <button className="sell">Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
