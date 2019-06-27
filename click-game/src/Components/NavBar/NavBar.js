import React, { Component } from 'react';
import './NavBar.css'



class NavBar extends Component {
    render() {
        return (
            <div>
               <nav className="nav">
                    <ul>
                        <li>
                            <p>Click Game</p>
                        </li>
                        <li>Score:

                        </li>
                        
                        <li>High Score:

                        </li>
                        </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;