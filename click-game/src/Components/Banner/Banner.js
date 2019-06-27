import React, { Component } from 'react';
import './Banner.css';



class Banner extends Component {
    render() {
        return (
            <header className="header">
            <h1>Game Rules!</h1>
            <h3>Click on an image to earn points...</h3>
            <h3>But be sure not to click the same image twice!</h3>
            </header>
        );
    }
}

export default Banner;