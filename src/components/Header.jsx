const Header = () => {
  return (
    <header>
      <div className="container">
        <img src="src/img/vinted9809.jpg" alt="" />
        <input
          type="search"
          name="site-search"
          placeholder="Recherche des articles"
          id="site-search"
        />
        <div className="sign-up">
          <button>S'inscrire</button>
          <button>Se connecter</button>
        </div>
        <button className="sell">Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
