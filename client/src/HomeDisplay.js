import './HomeDisplay.css';
import Home from './components/Home';
import background from "./img/bg.webp";

function HomeDisplay() {
  return (
    <div className="HomeDisplay" style={{ backgroundImage: `url(${background})`}}>
      <Home />
    </div>
  );
}

export default HomeDisplay;