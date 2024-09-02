import logo from "../img/vinted9809.jpg";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ token, setToken, search, setSearch }) => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo-vinted" />
        </Link>
        <input
          type="text"
          name="site-search"
          placeholder="Recherche des articles"
          id="site-search"
          value={search}
          onChange={(elem) => {
            setSearch(elem.target.value);
          }}
        />
        {token ? (
          <div>
            <button
              className="delete"
              onClick={() => {
                setToken(false);
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
        <Link to={token ? "/publish" : "/login"}>
          <button className="sell">Vends tes articles</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
