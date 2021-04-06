import React, { Component } from 'react';
import ReleaseSlider from '../../components/releaseSlider'
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
                <div className="music-page">  
                    <div>
                        <ReleaseSlider />
                    </div>
                </div> 
            </div>
    );
    }
}
 
export default Music;