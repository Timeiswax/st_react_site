import React, { Component, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import {useWindowWidth} from '@react-hook/window-size'
import {CSSTransition} from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'



const Header = () => {
    const [showOverlay, setOverlay] = useState(false);
    const onlyWidth = useWindowWidth()
    // console.log(onlyWidth)
    if(onlyWidth > 768){
    return (
        <nav>
            <div className="header-row">
                <Image id="logoe" src={"/svg/NEWDOTLOGO.svg"} height={50} width={100}/>
                
                <div className="header-links">
                    <Link href="/music" >Music</Link>
                    <Link href="/" >Home</Link>
                    <Link href="/about" >About</Link>
                    <Link href="/gallery" >Gallery</Link>
                    <Link href="/links" >Links</Link>
                    <Link href="/contact" >Contact</Link>   
                </div>
            </div>
        </nav>
        )} else {
            return (
                <nav>
                    <div className="mobile-row">
                    <FontAwesomeIcon className="burger-menu" onClick={() => setOverlay(!showOverlay)} icon={faBars}></FontAwesomeIcon>
                        {/* <button className="button-nav" onClick={() => setOverlay(!showOverlay)}><Image id="logo" src={"/svg/NEWDOTLOGO.svg"} height={50} width={100}/></button> */}
                        <CSSTransition
                            in={showOverlay}
                            timeout={1000}
                            unmountOnExit
                            classNames={"header-trans"}
                        >
                            <div className="nav-overlay-mobile"> 
                                <FontAwesomeIcon className="burger-menu" onClick={() => setOverlay(!showOverlay)} icon={faTimes}></FontAwesomeIcon>
                                <div className="col header-links">
                                    {/* <button className="button-nav" onClick={() => setOverlay(!showOverlay)}><Image id="logo" src={"/svg/NEWDOTLOGO.svg"} height={50} width={100}/></button> */}
                                    <ul>
                                        <li>
                                            <Link href="/music" >Music</Link>
                                        </li>
                                        <li>
                                            <Link href="/" >Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/about" >About</Link>
                                        </li>
                                        <li>
                                            <Link href="/gallery" >Gallery</Link>
                                        </li>
                                        <li>
                                            <Link href="/links" >Links</Link>
                                        </li>
                                        <li>
                                           <Link href="/contact" >Contact</Link>  
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </nav>
            )
        }
    }
    
 
export default Header;
