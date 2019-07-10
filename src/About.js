import React from 'react';
import classNames from 'classnames';
import headshot from './photos/headshot1.JPG';

function About() {

  return (
    <div className="main">
      <div className = "globalContain">
      <div className = "headera">
        <h2 className = "headerName">
          <span>About Me</span>
        </h2>
        <div className = "line"/>
    </div>


    <div className = "gridCont">
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
        </p >
      </div>
      <div className = "imgdiv">
          <img className="headshot" src={headshot} width='400' />
      </div>
    </div>
</div>
      </div>

);

}

export default About;
