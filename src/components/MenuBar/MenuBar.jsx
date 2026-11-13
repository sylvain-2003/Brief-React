import logo from "../../assets/logo.png";

function MenuBar() {
  return (
    <header className="menu-bar">
      <div className="logo"><img src={logo} alt="logo" /></div>

      <nav>
        <a href="/">Home</a>
        <a href="/Articles">Articles</a>
        <a href="/About">À propos</a>
        <a href="/Contact">Contact</a>
      </nav>

      <button className="btn-connexion">Connexion</button>
    </header>
  );
}

export default MenuBar;
