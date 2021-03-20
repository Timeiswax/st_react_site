import React, { Component } from 'react';
import ReleaseCarousel from '../components/releaseCarousel'

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="full-page top music">    
                <div className="col">
                    <h1>Music</h1>
                    <ReleaseCarousel />
                    <div style={{padding:"60px"}} />
                </div>
                
            </div> 
    );
    }
}
 
export default Music;