import React from 'react';


const ProjectCard = (props) => {
  return(
  <div className = "carddiv">
    <div className = "cardpics">
    <img className = "staticimg" src = {props.static}/>
    <img className = "gif" src={props.gif} />
  </div>
    <div className = "cardtext">
<p>
{props.text}
</p>            </div>
</div>);

}

export default ProjectCard;
