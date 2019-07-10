import React from 'react';
import './App.css';
import classNames from 'classnames';

function App() {

  return (
    <div className="main">
      <div className = "globalContain">
      <div className = "headera">
        <h2>
          <span>Filler Text</span>
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
          <img className="headshot" src='https://cdn.auth0.com/blog/react-js/react.png' width='400' height='400px'/>
      </div>
    </div>
</div>
      </div>

);

}

export default App;
