import React from 'react';
import classNames from 'classnames';
import headshot from './photos/headshot1.JPG';

function About() {

  return (
    <div className="main">
      <div className = "globalContain">
      <div className = "headera">
        <h2 className = "headerName">
          <span className = "whiteSpace">About Me</span>
        </h2>
        <div className = "line"/>
    </div>


    <div className = "gridCont">
      <div>
        <p>
        <span className = "greeting"> Hey! </span>
          My name is Mark Huynh and I am a student studying Electrical/Computer
          Engineering (ECE) with a huge passion for learning Computer Science at
          every chance I get. Academic courses alone have never satisfied my enthusiasm
          for both hardware and software and I often find myself tackling random
          projects (such as this website) strictly out of curiousity and to expand
          my breath in ECE/CS.
            <br></br><br></br>
          I am a huge advocate for <i>learning through doing</i> and I openly welcome
          any opportunity that comes my way. Relevant tools I have been working with
          include:

          
          <ul>
            <li>C++/C/Java/Python</li>
            <li>ReactJS and Node.js</li>
            <li>HTML/CSS/JS</li>
          </ul>

          <ul>
            <li>SystemVerilog</li>
            <li>Arduino/Microcontrollers</li>
            <li>Digital Logic and Design</li>
          </ul>

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
