import React, { Component } from 'react';
import Header from '../components/header'


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Header />
                <div className="about-page">
                    <div className="paraCol">
                
                        <h1>About</h1>
                        <p><span>Depending on when you ask him,</span> Shane’s Dad will tell you that the Detroit, Michigan based Shane Thiede has been holding drumsticks in his hands since anywhere from 4 days to 4 weeks old. Any way you slice it, he started pretty early on. Shane’s Dad, a drummer himself, started Shane down the path that eventually lead him to pick up bass in college, which lead him to pick up guitar, which lead him to pick up keys, which lead him to writing songs…</p>
                
                        <p><span>Which lead Shane to All of This,</span> his first ever EP. Slapping earnest (if at times intentionally heavy-handed) lyrics over jazzy arrangements, a little pop, and a good amount of funk, the first Shane Thiede release is something he feels remains true to his musical upbringing, his sense of humor, and his general thoughts about the world around him. Shane wrote most of the songs on All of This as part of a Reddit challenge to practice songwriting and not to ever release publicly. But, with the positive feedback his songs got from his friends and family, Shane Thiede decided to muster up the courage to record them for real, releasing them just a few weeks after he graduated college. He’s glad he did.</p>
                
                        <p><span>Shane is currently spending time writing music for future releases,</span> trying to up his skills in music, in songwriting, and in personal branding, which he finds difficult. Shane isn't the one writing this. He promises.</p>
                
                        <div style={{"padding":"60px"}}></div>
                    </div>
                </div>
            </div>
          );
    }
}
 
export default About;
    
