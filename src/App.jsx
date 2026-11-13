import "./App.css";
import MenuBar from "./components/MenuBar/MenuBar";
import LeftAside from "./components/LeftAside/leftAside";
import MainContent from "./components/MainContent/MainContent";
import RightAside from "./components/RightAside/RightAside";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="page">
      <MenuBar />

      <div className="contenu">
        <LeftAside />
        <MainContent />
        <RightAside />
      </div>

      <Footer />
    </div>
  );
}

export default App;
