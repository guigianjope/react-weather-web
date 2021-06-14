import React from 'react';
import logo from '../assets/logo.png';
import './Header.css';

function Header(props) {
    return (
        <div className="header">
            <div className="left-bar">
                <img src={logo} alt="logo weather web"/>
            </div>
            <div className="right-bar">
                <form className="search-bar" onSubmit={(e) => props.changeWeather(e)} >
                    <input className="city-input" placeholder="Enter City..." onChange={(e) => props.changeCity(e.target.value) } />
                </form>
            </div>
        </div>
    )
}

export default Header;