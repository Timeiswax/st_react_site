import React from 'react';
import Link from 'next/link'

const index = () => {
    return ( 
    <div className="full-page">
        <div className="col" style={{textAlign:"center"}}>            
            <h1>This site is under construction right now</h1>
            <h2>But you can get to my page for Setup:</h2>
            <Link href='/music/Setup' >Here</Link>
        </div>
    </div>

    );
}
 
export default index;