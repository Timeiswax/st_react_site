import React, { Component } from 'react';
import ReleaseCarousel from '../components/releaseCarousel'
import Header from '../components/header'

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Header />
                <div className="full-page music">    
                    <div className="col top">
                        <h1 style={{marginTop:"20px"}}>Music</h1>
                        <ReleaseCarousel />
                        <div style={{padding:"60px"}} />
                    </div>
                </div>    
            </div> 
    );
    }
}
 
export default Music;