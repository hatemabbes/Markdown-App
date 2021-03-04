import React, { Component, Fragment } from 'react';
import { sampleText } from './sampleText'
import './App.css';
import marked from 'marked'

class App extends Component {
  state = {
    text: sampleText
  }
  handlechange = event => {
    const text = event.target.value
    this.setState({ text })
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <textarea value={this.state.text} onChange={this.handlechange} className="form-control" rows="35" />
            </div>
            <div className="col-sm-6">
              {this.state.text}
            </div>
          </div>

        </div>
      </Fragment>

    );
  }

}

export default App;
