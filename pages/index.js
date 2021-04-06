import React from 'react';
import Link from 'next/link'

const index = () => {
    return ( 
    <div className="full-page">
        <div className="col" style={{textAlign:"center"}}>            
            <h3>This site is under construction right now</h3>
            <h3>But you can get to my page for Setup:</h3>
            <Link href='/music/payoff' >Here</Link>
            <h3>or email me at</h3>
            <a href="mailto:shane@shanethiede.com"><span>shane@shanethiede.com</span></a>
        </div>
    </div>

    );
}
 
export default index;