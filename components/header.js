import React, { Component, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import {useWindowWidth} from '@react-hook/window-size'
import {CSSTransition} from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'



const Header = () => {
    const [showOverlay, setOverlay] = useState(false);
    const onlyWidth = useWindowWidth()
    // console.log(onlyWidth)
    if(onlyWidth > 768){
    return (
        <div>
            <nav className="header-row">
                <Image id="logoe" src={"/svg/NEWDOTLOGO.svg"} height={50} width={100}/>
                
                <div id="header-nav" className="header-links">
                    <Link href="/music" >Music</Link>
                    <Link href="/" >Home</Link>
                    <Link href="/about" >About</Link>
                    <Link href="/gallery" >Gallery</Link>
                    <Link href="/links" >Links</Link>
                    <Link href="/contact" >Contact</Link>   
                </div>
            </nav>
        </div>
        )} else {
            return (
                <nav>
                    <div className="mobile-row">
                    <FontAwesomeIcon onClick={() => setOverlay(!showOverlay)} icon={faBars}></FontAwesomeIcon>
                        {/* <button className="button-nav" onClick={() => setOverlay(!showOverlay)}><Image id="logo" src={"/svg/NEWDOTLOGO.svg"} height={50} width={100}/></button> */}
                        <CSSTransition
                            in={showOverlay}
                            timeout={1000}
                            unmountOnExit
                            classNames={"header-trans"}
                        >
                            <div className="nav-overlay-mobile"> 
                                
                                <div className="col header-links">
                                    <FontAwesomeIcon onClick={() => setOverlay(!showOverlay)} icon={faBars}></FontAwesomeIcon>

                                    {/* <button className="button-nav" onClick={() => setOverlay(!showOverlay)}><Image id="logo" src={"/svg/NEWDOTLOGO.svg"} height={50} width={100}/></button> */}
                                    <Link href="/music" >Music</Link>
                                    <Link href="/" >Home</Link>
                                    <Link href="/about" >About</Link>
                                    <Link href="/gallery" >Gallery</Link>
                                    <Link href="/links" >Links</Link>
                                    <Link href="/contact" >Contact</Link>  
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </nav>
            )
        }
    }
    
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
    
 
export default Header;
