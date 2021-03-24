import React, { Component, useState } from 'react';
//import releaseCarouselData from '../public/json/releaseCarouselData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import ReleaseCard from './releaseCard'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('test')
//   const sets = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: sets
//   }
// }

// const cards = Object.keys(releaseCarouselData).map(i => {
//   return(
//     <ReleaseCard key={releaseCarouselData[i]['title']} pic={releaseCarouselData[i]['pic']} title ={releaseCarouselData[i]['title']} links={releaseCarouselData[i]['links']} />
//   )
// })

// const subs =Object.keys(releaseCarouselData).map(i => {
//   return(
//     <span key={releaseCarouselData[i]['title']}>{releaseCarouselData[i]['title']}</span>
//   )
// })

// const length = cards.length;
const length = 2

const ReleaseCarouselFCN = (props) => {
  const releaseCarouselData = require('../public/json/releaseCarouselData')
  const [index, indexfcn] = useState(0);

  function indexMinus() {
    const j = index;
    indexfcn(Math.abs(j-1)%length)
  }

  function indexPlus() {
    const j = index;
    indexfcn(Math.abs(j+1)%length);
    console.log(props)
  }

  return (
    <div className="carousel">
      <div className="col">
        <div className="row">
          <div className="car-button" onClick={indexMinus} style={{marginRight:"20px"}}>
            <FontAwesomeIcon icon={faChevronLeft}/>
          </div>
            <div className="car-card-wrapper">
            <TransitionGroup>
              <CSSTransition
              in={true}
              key={index}
              timeout={1000}
              classNames={"car-card"}
                >
                  <div></div>
                  {/* {cards[this.state.index]} */}
              </CSSTransition>
            </TransitionGroup>
          </div>
          <div className="car-button" onClick={indexPlus} style={{marginLeft:"20px"}}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        {/* <div className="row" style={{marginTop:"20px"}}>
          {subs}
        </div> */}
      </div>
    </div>
    );
}
 
export default ReleaseCarouselFCN;




