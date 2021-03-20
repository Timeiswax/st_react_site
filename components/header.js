import React, { Component } from 'react';
import Image from 'next/image'
import Link from 'next/link'

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
                <nav className="row between header" id="header">
                    
                    <div className = "d-flex flex-column">
                        <Image src="/svg/header-gradient.svg" layout='fill' />
                    </div>
                    <img id="logo" className="logo" src="svg/Dots_Icon.svg" alt="Shane Thiede Dot Logo" />
                    <div id="header-nav" className="d-flex flex-row justify-content-start header-nav">
                        <Link href="about" className="header-link">About</Link>
                        <Link href="music" className="header-link">Music</Link>
                        <Link href="index" className="header-link">Home</Link>
                        <Link href="gallery" className="header-link">Gallery</Link>
                        <Link href="links" className="header-link">Links</Link>
                        <Link href="contact"className="header-link">Contact</Link>   
                    </div>
                </nav>
            
                {/* <nav className="d-block d-md-none navbar">
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

                <div className="overlay"></div> */}
            </div> 
        );
    }

};

export default Header