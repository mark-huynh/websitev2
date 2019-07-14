import React from 'react';
import classNames from 'classnames';
import headshot from './photos/headshot1.JPG';

import {LoadItem} from './animations.js';
import { fadeInDown, fadeInUp } from 'react-animations'
import styled, { keyframes } from 'styled-components';

const FadeInUp = styled.div`animation: .5s ${keyframes`${fadeInUp}`}`;
const FadeInDown = styled.div`animation: 1.5s ${keyframes`${fadeInDown}`}`;


class About extends React.Component {

state = {isVisible: false};

componentDidMount(){
  this.setState({isVisible: !this.state.isVisible});
}

render(){

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
      <div className = "contdiv">
        <p>
        <span className = "greeting"> Hey! </span>

          {/*<LoadItem pose = {this.state.isVisible ? 'visible' : 'hidden'}>*/}
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

<div className = "skillsGrid">

          <ul><span>Software</span>
            <li>C++/C/Java/Python</li>
            <li>ReactJS and Node.js</li>
            <li>HTML/CSS/JS</li>
          </ul>

          <ul><span>Hardware</span>
            <li>SystemVerilog</li>
            <li>Arduino/Microcontrollers</li>
            <li>Digital Logic and Design</li>
          </ul>

        </div>
        {/*</LoadItem>*/}
        </p >
      </div>
      <div className = "imgdiv">
        <div className = "helper"></div>
        <FadeInDown>
          <img className="headshot" src={headshot}/>
        </FadeInDown>
      </div>
    </div>
</div>
      </div>

);
}

}

export default About;
