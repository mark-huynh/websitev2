import React from 'react';

let styles = {
  background: "black"
}

const Expcomp = (props) => {
  return (
    <div className = "contentgrid">
      <div className = "contentCont">
        <h1>{props.title}</h1>
        <h2>{props.info}</h2>
        <p>{props.text}</p>
      </div>
      <div>
        <img height = '200px' src = {props.img1}></img>
        <img height = '200px' src = {props.img2}></img>
        <img></img>
      </div>
    </div>
);

}

export default Expcomp;
