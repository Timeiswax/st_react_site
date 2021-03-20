import Head from 'next/head'
import { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Link from 'next/link'
import useWindowDimensions from '../components/useWindowDimensions';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "Music",
      in: false
      }
  }
  render() { 
    // const {height, width} = useWindowDimensions();
    
    // console.log(width)
    const items = ['Music', 'About', 'Gallery', 'Contact', 'Links'];
    var cards = Object.keys(items).map(i => {
        return(
                  <Link            
                  key={items[i]}
                  onMouseOver={() => this.setState({word: items[i]})}
                  href={items[i].toLowerCase()}
                    >
                    {items[i]}
                  </Link>
        )
    })
    var subscript = <h2 id="subscript" key={this.state.word} className="fp-title fp-title-sub">{this.state.word}</h2>
    return (
      <div id="intro" class="full-page index-page">
      {/* <img src="jpg/front-page/Music.jpg" class="sidePic" alt="Coffee is important" /> */}
      <div className="col">
        <div className="row">
          <div className = "col">
              <h1 className="fp-title" style={{"paddingBottom":"60px"}}>Shane Thiede</h1>
              <TransitionGroup>
                <CSSTransition
                in={true}
                key={this.state.word}
                timeout={1000}
                classNames={"fp-title"}
                >
                  <div className="row" style={{"position":"relative","marginBottom":"60px"}}>
                    {subscript}
                  </div>
                </CSSTransition>
              </TransitionGroup>
          </div>
          <div class="col">
            {cards}
          </div>
        </div>
      </div>
    </div> 
      );
  }
}
 
export default Home;
