import React, { Component } from 'react';
import './Navmenu.css';
class Navmenu extends Component {
  render() {
      
    return (
        <div>
        <div className="Navmenu">
            <nav className="Navlink">
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#contact">contact</a>
                <a href="#login">login</a>
            </nav>
        </div>
        </div>
    )
  }
}

export default Navmenu
