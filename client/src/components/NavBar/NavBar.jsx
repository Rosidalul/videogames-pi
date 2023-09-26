import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';

function NavBar() {
    return (
        <div className="navbarestilo">
            <SearchBar/>
                <NavLink to="/"><button>INICIO</button></NavLink>
                <NavLink to="/videogames"><button> VIDEO GAMES </button></NavLink>
                <NavLink to="/crearjuego"><button> CREAR JUEGO </button></NavLink>
               
        </div> 
    )
}

export default NavBar;
