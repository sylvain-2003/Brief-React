import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

// Un petit composant « Publicite » qui reçoit des props (titre et texte)
function Publicite(props) {
  return (
    <div className="publicite">
      <strong>{props.titre}</strong>
      <p>{props.texte}</p>
    </div>
  );
}

function RightAside() {
  return (
    <aside className="right-aside">
      <h3>Publicités</h3>

      {/* Le même composant, utilisé 3 fois avec des props différentes */}
      <div>
        <img src={img1} alt="img1" />
        <h2>Publicité 1</h2>
        <p>Texte de la première publicité.</p>
      </div>
      <div>
        <img src={img2} alt="img2" />
        <h2>Publicité 1</h2>
        <p>Texte de la première publicité.</p>
      </div>
      <div>
        <img src={img3} alt="img3" />
        <h2>Publicité 1</h2>
        <p>Texte de la première publicité.</p>
      </div>
      
      <button className="btn">Toutes les publicités</button>
    </aside>
  );
}

export default RightAside;
