import React from 'react';
import logo from './logo.svg';
import './App.css';
import classNames from 'classnames';

function App() {
  let imgHorizLine = classNames('imgHorizLine', "col-lg-9");
  let container = classNames('container', 'row');
  let imgContainer = classNames('col-lg-6', 'imgContainer');

  return (
    <div className="main">
      <div className = "headera">
        <h2>
          <span>Filler Text</span>
        </h2>
        <div className = "line"/>
    </div>


    <div className = "gridCont">
      <div>
        text
      </div>
      <div>
        image
      </div>
    </div>

    <div className={container}>
      <p className="col-lg-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
      </p >
      <div className={imgContainer}>
        <img className="headshot" src='https://cdn.auth0.com/blog/react-js/react.png' width='70%' height='70%'/>
      </div >
    </div>
  </div>
);

}

export default App;
