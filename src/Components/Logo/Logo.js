import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './Brain.png'

const Logo = () => {
    return(
        <div className="ma1 tp0" style={{width: '200px'}}>
    <Tilt className="Tilt br2">
      <div style={{ height: '200px' }}>
        <h1><img style={{width: '125px', height: '125px', paddingTop: '35px'}} src={brain} alt="logo"></img></h1>
      </div>
    </Tilt>

        </div>
    )
}

export default Logo;