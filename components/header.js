import React, { Component } from 'react';
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <div>
        <nav className="header-row">
            <Image id="logo" src={"/svg/NEWDOTLOGO.svg"} height={50} width={100}/>
            <div id="header-nav" className="header-links">
                <Link href="/music" className="p-2">Music</Link>
                <Link href="/" className="p-2">Home</Link>
                <Link href="/about" className="p-2">About</Link>
                <Link href="/gallery" className="p-2">Gallery</Link>
                <Link href="/links" className="p-2">Links</Link>
                <Link href="/contact" className="p-2">Contact</Link>   
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
 
export default Header;
