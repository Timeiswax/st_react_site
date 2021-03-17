import React, { Component } from 'react';

let compsMusic = [
    <Albuminfo key={"1"} id="card1" albumPic={"png/All of This - Cover Final.png"} description={"json/aotLinks.JSON"} title={"All of This"}/>,
    <Albuminfo key={"2"} id="card2" albumPic={"png/All of This - Cover Final.png"} description={"json/aotLinks.JSON"} title={"All of This yoooo"}/>
];

let compsGal = [
    <Albuminfo key={"1"} id="card1" albumPic={"png/All of This - Cover Final.png"} description={"json/aotLinks.JSON"} title={"All of This ey"}/>,
    <Albuminfo key={"2"} id="card2" albumPic={"png/All of This - Cover Final.png"} description={"json/aotLinks.JSON"} title={"All of This haraa"}/>
]

class CarouselCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      property: 0,
      length: this.props.comps.length
    }
  }
 
    
  nextProperty = () => {
    const newIndex = Math.abs((this.state.property + 1) % this.state.length);
    $("#cards-slider-wrapper").animate({opacity: 0}, 300, () => {
        setTimeout(() => {
            this.setState({
                property: newIndex
            })
            $("#cards-slider-wrapper").animate({opacity: 1}, 300);
        }, 200)
    });
  }
  

  prevProperty = () => {
    const newIndex = Math.abs((this.state.property - 1) % this.state.length);
    $("#cards-slider-wrapper").animate({opacity: 0}, 300, () => {
        setTimeout(() => {
            this.setState({
                property: newIndex
            })
            $("#cards-slider-wrapper").animate({opacity: 1}, 300);
        }, 200)
    });
    
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

