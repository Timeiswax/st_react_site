import React, { Component } from 'react';
import releaseCarousel from '../public/json/releaseCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import ReleaseCard from './releaseCard'
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const cards = Object.keys(releaseCarousel).map(i => {
  return(
    <ReleaseCard key={releaseCarousel[i]['title']} pic={releaseCarousel[i]['pic']} title ={releaseCarousel[i]['title']} links={releaseCarousel[i]['links']} />
  )
})

const length = cards.length;

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

    return (
      <div className="carousel">
        <div className="col">
          <div className="row between">
            <div className="carButton" onClick={this.indexMinus}>
              <FontAwesomeIcon icon={faChevronLeft}/>
            </div>
            <div className="card-wrapper">
              <TransitionGroup>
                <CSSTransition
                in={true}
                key={this.state.index}
                timeout={5000}
                classNames={"car-card"}
                  >
                      {cards[this.state.index]}
                </CSSTransition>
              </TransitionGroup>
            </div>
            <div className="carButton" onClick={this.indexPlus}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
            </div>
          </div>
      </div>
    );
  }
}

export default ReleaseCarousel

