function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="logo">Logo</div>
        <div className="reseaux">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div>
        <h4>Menu</h4>
        <ul>
          <li>Home</li>
          <li>Articles</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <h4>Liens utiles</h4>
        <ul>
          <li>Aide</li>
          <li>Conditions</li>
          <li>Confidentialité</li>
        </ul>
      </div>

      <div>
        <h4>À propos</h4>
        <p>Un petit texte pour présenter le site et son équipe.</p>
      </div>
    </footer>
  );
}

export default Footer;
