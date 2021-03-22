import React, { Component } from 'react';

class CarouselCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      property: 0,
      length: this.props.comps.length
    }
  }
  
  render() {

    return (
      <div className="d-flex flex-row justify-content-around align-items-center carousel">
            <i className="fas fa-chevron-left c-icon-l" onClick={()=>this.prevProperty()}></i>
            <div id="cards-slider-wrapper" className="d-flex" style={{
              transform: `translateX(${this.state.property*0}px)`                                           
            }}>
                
                {this.props.comps[this.state.property]}
            </div>
            <i class="fas fa-chevron-right c-icon-r" onClick={()=>this.nextProperty()}></i>
      </div>
    );
  }
}

export default carouselCard

