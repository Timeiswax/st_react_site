import React, { Component, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpotify, faBandcamp, faYoutube, faItunes} from '@fortawesome/free-brands-svg-icons'
import { prominent } from 'color.js'
import Link from 'next/link'


function ReleaseCard(props) {
  const iconRef = {"faSpotify": faSpotify, "faBandcamp":faBandcamp, "faYoutube":faYoutube, "faItunes":faItunes}
  const links = Object.keys(props.links).map(i =>{
    const iconName = props.links[i]['icon'];
    return(
        <a href={props.links[i]['link']} 
        style={{"backgroundColor":props.links[i]['color']}}
        onMouseOver={()=>setCta(props.links[i].text)}
        >
          <FontAwesomeIcon icon={iconRef[iconName]}></FontAwesomeIcon>
        </a>
    )
  })

  const [cta, setCta] = useState('Listen on Spotify')

    return (        
      <div className="car-card">
        <div className="col">
          <div className="card-thang">
            <h3 className="car-card-title">{props.title}</h3>
            <Link href={`/music/${props.title}`} passHref={true}>
              <img src={props.pic} alt="Shane Thiede" />
            </Link>
          </div>
          <div className="row card-side-bg">
              {links}
          </div>
          <div>
              <h4 style={{marginTop:"10px"}}>{cta}</h4>
          </div>
          
        </div>
    </div>  
  );
}
 

export default ReleaseCard;
