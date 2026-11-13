import hero from "../../assets/hero.jpeg";
import { useState } from "react";

const commentaires = [
  { auteur: "Ama", texte: "Très bon domicile, merci pour les informations !" },
  { auteur: "Yao", texte: "C'est super." },
];

function MainContent() {
  // useState : un compteur de « J'aime » qui change quand on clique
  const [likes, setLikes] = useState(0);

  return (
    <main className="main-content">
      <article>
        <h2 className="titre-une">À la Une</h2>
        <div className="image-une"><img src={hero} alt="hero" /></div>
        <h3>Titre de l'article à la une</h3>
        <p>
          Ici, on écrit le résumé de l'article. C'est le texte que le visiteur
          lit avant d'ouvrir l'article complet.
        </p>

        <div className="actions">
          <button className="btn" onClick={() => setLikes(likes + 1)}>
            👍 J'aime ({likes})
          </button>
          <button className="btn">🔗 Partager</button>
        </div>
      </article>

      <section className="commentaires">
        <h3>Commentaires</h3>
        {commentaires.map((c) => (
          <div className="commentaire" key={c.auteur}>
            <div className="avatar">{c.auteur[0]}</div>
            <div>
              <strong>{c.auteur}</strong>
              <p>{c.texte}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default MainContent;
