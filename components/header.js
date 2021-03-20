import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        homepage: false
    }
  };
  render() {
        return (
            <div>
                <nav className="d-none d-md-flex flex-row align-items-center header" id="header">
                    
                    <div className = "d-flex flex-column">
                        <img src="svg/header-gradient.svg" alt="head-grade" className="grade"></img>
                    </div>
                    <img id="logo" className="logo" src="svg/Dots_Icon.svg" alt="Shane Thiede Dot Logo" />
                    <div id="header-nav" className="d-flex flex-row justify-content-start header-nav">
                        <a href="index.html" className="p-2">Home</a>
                        <a href="music.html" className="p-2">Music</a>
                        <a href="about.html" className="p-2">About</a>
                        <a href="gallery.html" className="p-2">Gallery</a>
                        <a href="links.html" className="p-2">Links</a>
                        <a href="contact.html" className="p-2">Contact</a>   
                    </div>
                </nav>
            
                <nav className="d-block d-md-none navbar">
                    <button id="navButton" className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbar"
                    aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"><span>
                        <img id="logo-m" className="img-fluid" src="svg/Dots_Icon.svg" alt="Shane Thiede Dot Logo" /></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="music.html">Music</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.html">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="gallery.html">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="links.html">Links</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>

                </nav>

                <div className="overlay"></div>
            </div>
        );
    }

};

export default Header