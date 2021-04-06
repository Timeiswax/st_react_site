import React, { Component, useState } from 'react';
import releaseCarouselData from '../public/js/releaseCarouselData'
import ReleaseCard from './releaseCard'

const cards = Object.keys(releaseCarouselData).map(i => {
  console.log("hey")
  return(
    <ReleaseCard key={releaseCarouselData[i]['url']} pic={releaseCarouselData[i]['pic']} title ={releaseCarouselData[i]['title']} links={releaseCarouselData[i]['links']} url={releaseCarouselData[i]['url']} />
  )
})

// const subs =Object.keys(releaseCarouselData).map(i => {
//   return(
//     <span key={releaseCarouselData[i]['title']}>{releaseCarouselData[i]['title']}</span>
//   )
// })

const length = cards.length;


class ReleaseSlider extends Component {

  constructor(props){
    super(props);
    this.state = {
      index: 0
    }
  }

  render() {
    return (
      <div className="carousel">
        <div className="row-music-title">
          <h1 style={{position:"fixed",top:"80px"}}>Music</h1>
        </div>
          <div className="row-music-cards">
            {cards}
          </div>
      </div>
    );
  }
}


export default ReleaseSlider

