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
      in: true
      }
  }
  render() { 
    // const {height, width} = useWindowDimensions();
    
    // console.log(width)
    const items = ['Music', 'About', 'Gallery', 'Contact', 'Links'];
    var cards = Object.keys(items).map(i => {
        return(
                <div onMouseOver={() => this.setState({word: items[i]})} key={items[i]}>
                  <Link href={`/${items[i].toLowerCase()}`}>
                    {items[i]}
                  </Link>
                </div>
        )
    })
    var subscript = <h2 id="subscript" key={this.state.word} className="fp-title-sub">{this.state.word}</h2>
    return (
      <div id="intro" className="full-page">
      {/* <img src="jpg/front-page/Music.jpg" class="sidePic" alt="Coffee is important" /> */}
      <div className="col">
        <div className="row">
            <div className = "col">
                <h1 className="fp-title" >Shane Thiede</h1>
                <div className="fp-title-sub-wrapper">
                  <h2 className="fp-title-sub-ph">Contact</h2>
                  <TransitionGroup>
                    <CSSTransition
                    in={true}
                    key={this.state.word}
                    timeout={1000}
                    classNames={"fp-title"}
                    >
                        {subscript}
                    </CSSTransition>
                  </TransitionGroup>
                </div>
          </div> 
          <div className="col" style={{justifyContent:'center'}}>
            {cards}
          </div>
        </div>
      </div>
    </div> 
      );
  }
}
 
export default Home;
