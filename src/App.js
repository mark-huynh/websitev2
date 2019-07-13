import React from 'react';
import classNames from 'classnames';
import About from './About.js'
import Experience from './Experience.js'

function App() {

  return (
    <div>
    <div>
    <About />
    </div>
    <div>
    <Experience />
        </div>
        <div>
          <div className = "carddiv">
            <div className = "cardpics">
            <img className = "staticimg" src = "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg"/>
            <img className = "gif" src="https://media.giphy.com/media/mhh4VA7LKYL9S/giphy.gif" />
          </div>
            <div className = "cardtext">
<p>
asdf
</p>            </div>
          </div>
        </div>
        </div>
);

}

export default App;
