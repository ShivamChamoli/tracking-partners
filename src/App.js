import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content.js';

class App extends Component {
  constructor(props) {
    super(props);
    //data required for the application
    //sections - partner types i.e. security, networks customer etc
    //partners - partner details
    this.data = {sections:3, partners: {}};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*red hat logo will come here*/}
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Red Hat-tracking partners</h1>
        </header>
          {/*App body that contains Content which contains the sections*/}
          <div className="App-body">
            <Content data={this.data} />
          </div>
      </div>
    );
  }
}

export default App;
