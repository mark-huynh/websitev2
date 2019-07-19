import React from 'react';

let styles = {
  background: "black"
}

const Expcomp = (props) => {
  return (
    <div className = "contentgrid">
      <div className = "contentCont">
        <div>
        <h1><b>{props.title}</b></h1>
        <h2>{props.info}</h2>
        <p>{props.text}</p>
      </div>
      </div>
      <div className = "exppiccont">
        <div>
        <img src = {props.img1}></img>
        <img src = {props.img2}></img>
        </div>
      </div>
    </div>
);

}

export default Expcomp;
