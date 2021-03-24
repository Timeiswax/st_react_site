import React, { Component } from 'react';
import ReleaseCarousel from '../../components/releaseCarousel'
import Header from '../../components/header'

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
                        <div className="col">
                            <h1>Music</h1>
                            <div style={{padding: "20px"}}></div>
                            {/* <ReleaseCarousel /> */}
                        </div>
                </div> 
            </div>
    );
    }
}
 
export default Music;