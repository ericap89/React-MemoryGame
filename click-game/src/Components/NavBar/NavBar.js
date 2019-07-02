import React from 'react';
import './NavBar.css'

const NavBar = (props) => (
    <nav className="nav">
      <ul>
        <li className="brand">
          Click Game
        </li>
        <li>
          Score: {props.score} 
         </li>
        <li>
        High Score:{props.highScore}
        </li>
        </ul>
    </nav>
  
  );
  

export default NavBar;