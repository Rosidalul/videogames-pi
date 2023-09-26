import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom"
import CrearJuego from "./components/CrearJuego/CrearJuego";
import Details from "./components/Details/Details";
import LandingPage from "./components/LandingPage/LandingPage";
import Error404 from "./components/Error404/Error404";
import Videogames from "./components/Videogames/Videogames";
function App() {
  return (
    <BrowserRouter>
   <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/videogames" component={Videogames}/>
          <Route exact path="/crearjuego" component={CrearJuego}/>
          <Route exact path="/videogame/:idVideogame" component={Details}/>
          <Route path='*' component={Error404}/>
   </Switch>
    </BrowserRouter>
  );
}

export default App;
