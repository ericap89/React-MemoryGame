import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';



class NavBar extends Component {
    render() {
        return (
            <div>
               <Navbar bg="dark" variant="light">
                    <Navbar.Brand  color="white">Click Game</Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;