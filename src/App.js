import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content.js';
import { Row, Col } from 'react-bootstrap';
import Sidemenu from './components/Sidemenu.js';

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

    this.items = [
      {divider: true, label: 'Main navigation', value: 'main-nav'},
      {label: 'item 1', value: 'item1', icon: 'fa-search',
      children: [
        {label: 'item 1.1', value: 'item1.1', icon: 'fa-snapchat',
        children: [
          {label: 'item 1.1.1', value: 'item1.1.1', icon: 'fa-anchor'},
          {label: 'item 1.1.2', value: 'item1.1.2', icon: 'fa-bar-chart'}]},
        {label: 'item 1.2', value: 'item1.2'}]},
      {label: 'item 2', value: 'item2', icon: 'fa-automobile',
      children: [
        {label: 'item 2.1', value: 'item2.1',
        children: [
          {label: 'item 2.1.1', value: 'item2.1.1'},
          {label: 'item 2.1.2', value: 'item2.1.2'}]},
        {label: 'item 2.2', value: 'item2.2'}]},
      {divider: true, label: 'Motors', value: 'motors-nav'},
      {label: 'item 3', value: 'item3', icon: 'fa-beer'}
    ];
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
              <div className="sidemenu"><Sidemenu items={this.items}/></div>
              <div className="main-content"><Content data={this.data} /></div> 
          </div>
      </div>
    );
  }
}

export default App;
