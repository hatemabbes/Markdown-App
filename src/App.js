import React, { Component, Fragment } from 'react';
import { sampleText } from './sampleText'
import './App.css';
import marked from 'marked'

class App extends Component {
  state = {
    text: ''
  }
  componentDidMount() {
    const text = localStorage.getItem('markedText')
    if (text) {
      this.setState({ text })
    }
    else {
      this.setState({
        text : sampleText
      })
    }
  }
  componentDidUpdate() {
    const { text } = this.state
    localStorage.setItem('markedText',text)
  }
  handlechange = event => {
    const text = event.target.value
    this.setState({ text })
  }
  markdownText = text => {
    return {
      __html : marked(text,{ sanitize : true})
    } 
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <textarea value={this.state.text} onChange={this.handlechange} className="form-control" rows="35" />
            </div>
            <div className="col-sm-6" >
              <div dangerouslySetInnerHTML={this.markdownText(this.state.text)}>
              </div>
            </div>
          </div>
        </div>
      </Fragment>

    );
  }

}

export default App;
