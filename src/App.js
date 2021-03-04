import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
          <div className="col-sm-6">
              <textarea value="test me" rows="35"/>
          </div>
          <div className="col-sm-6">
            Résultat
          </div>
          </div>
          
        </div>
      </Fragment>

    );
  }

}

export default App;
