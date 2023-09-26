import { Link } from 'react-router-dom';
import './landingpage.css'

export default function Landing() {

  return (
    <div className="Boton">
      <h2>API VEDEOGAMES</h2>
        
        <Link to="/videogames">
          <button className="inicio">EMPEZAR</button>
        </Link>
    </div>
  );
}