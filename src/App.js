import React from 'react';
import classNames from 'classnames';
import About from './About.js'
import linkedin from './photos/linkedin-logo.png';
import github from './photos/github-logo.png';
import email from './photos/email.png';
import Experience from './Experience.js'
import ProjectCard from './ProjectCard.jsx'
import {ProjectLoad, ProjectItem} from './animations.js'

class App extends React.Component {

  state = {
    isOpen: false
  };

  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({
    isOpen: !this.state.isOpen
  });

  render() {

    return (<div>
      <div className = "start">
        <img src = "https://cdn.wallpapersafari.com/23/25/yApFuD.jpg"/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Experience/>
      </div>
      <div className="tempcont">

        <ProjectLoad className = "hi" pose={this.state.isOpen
            ? 'open'
            : 'closed'}>
            <div className = "flexcol">
          <ProjectItem>
            <ProjectCard static = "https://c8.alamy.com/comp/EJ9MXX/business-man-pointing-to-the-bottom-right-EJ9MXX.jpg" gif = "https://media.giphy.com/media/mhh4VA7LKYL9S/giphy.gif" text = "What's that?"/>
          </ProjectItem>
          <ProjectItem>
            <ProjectCard static = "https://previews.123rf.com/images/ljupco/ljupco1509/ljupco150900232/45707154-casual-young-man-pointing-right-with-his-finger-and-looking-at-the-camera-isolated-on-white-backgrou.jpg" gif = "https://media.giphy.com/media/mhh4VA7LKYL9S/giphy.gif" text = "To my right?"/>
          </ProjectItem>
        </div>
        <div className = "flexcol">
          <ProjectItem>
            <ProjectCard static = "https://media.istockphoto.com/photos/woman-pointing-down-with-a-smile-on-her-face-picture-id820872664?k=6&m=820872664&s=612x612&w=0&h=9nouVUuexYIOsgQiDcQqWJiR4NM7h9Qz91PDuGRVN8I=" gif = "https://media.giphy.com/media/mhh4VA7LKYL9S/giphy.gif" text = "!!"/>
          </ProjectItem>
          <ProjectItem>
            <ProjectCard static = "http://4.bp.blogspot.com/_B5E5HPIKKBY/TCgENnaXouI/AAAAAAAAAZs/JHip18_p03M/s320/Screen+shot+2010-06-27+at+10.08.28+PM.png" gif = "https://media.giphy.com/media/mhh4VA7LKYL9S/giphy.gif" text = ":^)"  />
          </ProjectItem>
        </div>
        </ProjectLoad>
      </div>

      <div className = "footerdiv">
        <div>
          <h1 className = "endtitle">Connect with me</h1>
          <p>
            My door is always open! Feel free to message me regarding anything from bugs on this page, potential projects, or if you would like to learn a little more about myself! I will always try my best to reply as soon as I can.
          </p>
          <ul className = "links">
            <li>
              <a href="https://www.linkedin.com/in/mark-huynh-503/">
                <img src={linkedin}/>
              </a>
            </li>
            <li>
              <a href="https://github.com/mark-huynh">
                <img src={github}/>
              </a>
            </li>
            <li>
              <a href = "mailto:mark.huynh.oregon@gmail.com">
                <img src = {email}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>);

  }
}

export default App;
