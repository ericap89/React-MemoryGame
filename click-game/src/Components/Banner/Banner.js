import React, { Component } from 'react';
import './Banner.css';



class Banner extends Component {
    render() {
        return (
            <header className="header">
            <h1>Game Rules!</h1>
            <h4>Click on an image to earn points...</h4>
            <h4>But be sure not to click the same image twice!</h4>
            </header>
        );
    }
}

export default Banner;