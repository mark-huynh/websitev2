import React from 'react';
import Expcomp from './Expcomp.js'

import {keyframes} from "styled-components";


let styles = [{
  height: "120px",
},
  {
    height: "0px",
    filter: "blur(1px)",
    },
  {
    height: "0px",
    }
];

const otherComp = [
  <Expcomp title = 'CDK Global' info = "Software Engineer Intern June 2019 - August 2019"
    text =
    <ul>
      <li>
        Front-end and middle-ware developer for Drive Flex product integration and deployment, allowing OEMs and car dealerships to ___ workflow
      </li>
      <li>
        Optimized and refactored API endpoints using Java with Springboot framework and Reactjs for UI
      </li>
      <li>
        Scrum/Agile devlopment cycle via Jira, including stories stand-ups, grooming,
      </li>
      <li>
        Greatly reduced call times for API endpoints via asynchronozation through using reactive streams in Reactor Core
      </li>
    </ul>
    img1 =
    "https://www.bluefountainmedia.com/sites/default/files/2018-08/CaseStudy_CDK-Global_Hero_big.jpg"
    img2 =
    "https://www.bluefountainmedia.com/sites/default/files/2018-08/CaseStudy_CDK-Global_Hero_big.jpg"/>,
  <Expcomp title = '3nd' text = "boo" />
];

class Experience extends React.Component {



  constructor(props){
    super(props);
    this.state = {
      component: otherComp[0],
    styleType: 0,
    hover: 0
    }
  }

  handleClick = (i) => {
    this.setState({component: otherComp[i]})
    this.setState({styleType: i})
  }

  handleHover = () => {
    this.setState({hover: !this.state.hover})
  }

//{/*    <div style = {(this.state.styleType === 0 ? styles[0] : (this.state.hover === true ? styles[2] : styles[1]))}>*/}
//{/*  <div style = {(this.state.styleType === 1 ? styles[0] : (this.state.hover === true ? styles[2] : styles[1]))}>*/}

  render(){

    return(
      <div className = "expmain">
        <div className = "biggestCont">
        <div className = "iconbar" onMouseEnter = {this.handleHover} onMouseLeave = {this.handleHover}>
          <div className = "iconcont">
            <img style = {{display: "inline-block"}} onClick = {() => this.handleClick(0)} height = '100px' src = "https://media.licdn.com/dms/image/C4D0BAQFQO5tUIX4Ezg/company-logo_200_200/0?e=2159024400&v=beta&t=WHLB1KdNkpUnvPHQ-SHW5kTD6BvPcC-KTrXfSVT2RD8" />
            <div style = {(this.state.styleType === 0 ? styles[0] : (this.state.hover === true ? styles[2] : styles[1]))} className = "heightAnimate"></div>
          </div>
          <div className = "iconcont">
          <img onClick = {() => this.handleClick(1)} height = '100px' src = "https://i.pinimg.com/originals/d3/cb/a6/d3cba6ec907ed4ebc6b2762650d51215.png" />
          <div  style = {(this.state.styleType === 1 ? styles[0] : (this.state.hover === true ? styles[2] : styles[1]))} className = "heightAnimate">
          </div>
        </div>
      </div>{this.state.component}</div>
    </div>
    )
  }

  }

export default Experience;
