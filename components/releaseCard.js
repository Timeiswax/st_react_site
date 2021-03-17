import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpotify, faBandcamp, faYoutube, faItunes} from '@fortawesome/free-brands-svg-icons'
import { prominent } from 'color.js'



function ReleaseCard(props) {
  const iconRef = {"faSpotify": faSpotify, "faBandcamp":faBandcamp, "faYoutube":faYoutube, "faItunes":faItunes}
  const links = Object.keys(props.links).map(i =>{
    const iconName = props.links[i]['icon'];
    return(
      <div className="row card-link">
        
        <a href={props.links[i]['link']}
           style={{"backgroundColor":props.links[i]['color']}}
        >
          <FontAwesomeIcon icon={iconRef[iconName]}></FontAwesomeIcon>
          <div style={{width:"10px"}} />
          {props.links[i]['text']}
        </a>
      </div>
    )
  })
  prominent(props.pic).then(colors => console.log(colors))

    return (        
      <div className="car-card">
        <h2 className="carouselTitle">{props.title}</h2>
        <div className="col">
          <img src={props.pic} alt="Shane Thiede" style={{width: 300}}/>
          <div className="col sideBG">
              {links}
          </div>
        </div>
    </div>  
  );
}
 

export default ReleaseCard;
