import React from 'react';
import Expcomp from './Expcomp.js'

import {keyframes} from "styled-components";

var asdf = keyframes`
  0%{height: 0px;}
  100%{height: 110px;}
  `;

let styles = [{
  height: "110px",
  width: "110px",
  background: "black",
  transition: "height 2s",
    display: "inline-block",
    animation: `${asdf} 2s`
},
  {
    height: "110px",
    width: "110px",
    filter: "blur(1px)",
      display: "inline-block"
    },
  {
    height: "110px",
    width: "110px",
      display: "inline-block"
    }
];

const otherComp = [
  <Expcomp title = '2nd' text = "hi"
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
      component: <Expcomp title = "default comp" text = "this is text on load"/>,
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


  render(){

    return(
      <div className = "expmain">
        <div onMouseEnter = {this.handleHover} onMouseLeave = {this.handleHover}>
          <div style = {(this.state.styleType === 0 ? styles[0] : (this.state.hover === true ? styles[2] : styles[1]))}>
            <img onClick = {() => this.handleClick(0)} height = '100px' src = "https://media.licdn.com/dms/image/C4D0BAQFQO5tUIX4Ezg/company-logo_200_200/0?e=2159024400&v=beta&t=WHLB1KdNkpUnvPHQ-SHW5kTD6BvPcC-KTrXfSVT2RD8" />
          </div>
          <div style = {(this.state.styleType === 1 ? styles[0] : (this.state.hover === true ? styles[2] : styles[1]))}>
          <img onClick = {() => this.handleClick(1)} height = '100px' src = "data:image/png;base64,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" />
        </div>
        </div>
        {this.state.component}

        <div className = "overarch">
          <div className = "imgcontainer">
            <div className = "imagehold">
            </div>
          </div>
          <div className = "imgcontainer">
            <div className = "imagehold">
            </div>
          </div>
        </div>

    </div>
    )
  }

  }

export default Experience;
