// La liste des derniers articles (un tableau)
const articles = [
  "Titre du dernier article",
  "Un autre article récent",
  "Comment apprendre React",
  "Les nouveautés du web",
];

function LeftAside() {
  return (
    <aside className="left-aside">
      <h3>Derniers articles</h3>

      <ul>
        {/* map : on crée un <li> pour chaque titre du tableau */}
        {articles.map((titre) => (
          <li key={titre}>
            <a href="#">{titre}</a>
          </li>
        ))}
      </ul>

      <button className="btn">Tous les articles</button>
    </aside>
  );
}

export default LeftAside;
