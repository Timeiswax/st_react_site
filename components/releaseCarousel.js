import React, { Component, useState } from 'react';
//import releaseCarouselData from '../public/json/releaseCarouselData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import ReleaseCard from './releaseCard'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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


class ReleaseCarousel extends Component {

  constructor(props){
    super(props);
    this.state = {
      index: 0
    }
    this.indexMinus = this.indexMinus.bind(this)
    this.indexPlus = this.indexPlus.bind(this)
  }

  indexMinus() {
    const j = this.state.index;
    this.setState({
      index: Math.abs(j-1)%length
    })
  }
 
  indexPlus() {
    const j = this.state.index;
    this.setState({
      index: Math.abs(j+1)%length
    })
  }
  
  
  render() {
    console.log(this.props)
    return (
      <div className="carousel">
        <div className="col">
          <div className="row">
            <div className="car-button" onClick={this.indexMinus} style={{marginRight:"20px"}}>
              <FontAwesomeIcon icon={faChevronLeft}/>
            </div>
              <div className="car-card-wrapper">
              <TransitionGroup>
                <CSSTransition
                in={true}
                key={this.state.index}
                timeout={1000}
                classNames={"car-card"}
                  >
                    <div></div>
                    {/* {cards[this.state.index]} */}
                </CSSTransition>
              </TransitionGroup>
            </div>
            <div className="car-button" onClick={this.indexPlus} style={{marginLeft:"20px"}}>
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
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('../public/json/releaseCarouselData')
  const sets = await res.json()
  console.log("shoop")
  console.log(res)

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      sets,
      "se":"ddd"
    },
  }
}

export default ReleaseCarousel

