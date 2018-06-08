import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content.js';

class App extends Component {
  constructor(props) {
    super(props);
    //data required for the application
    //sections - partner types i.e. security, networks customer etc
    //categories - types of partners
    //partners - partner details
    this.data = {
      "partnerDetails": {
        "sections": "3",
        "partnerCount":"5",
        "categories": {
          "1": "Networks",
          "2": "Databases",
          "3": "Security"
        },
        "partners": {
          "1": {
            "id": "1",
            "name": "nuoDB",
            "type": "2"
          },
          "2": {
            "id": "2",
            "name": "sysdig",
            "type": "3"
          },
          "3": {
            "id": "3",
            "name": "aruba",
            "type": "1"
          },
          "4": {
            "id": "4",
            "name": "scyllaDB",
            "type": "2"
          },
          "5": {
            "id": "5",
            "name": "random",
            "type": "2"
          }
        }
      }
    }
    //this.data = {sections:3, partners:{}};
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
