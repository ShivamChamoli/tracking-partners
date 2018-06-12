import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content.js';
import Sidemenu from './components/Sidemenu.js';
import Data from './data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {filters:[]};
    //data required for the application
    //sections - partner types i.e. security, networks customer etc
    //categories - types of partners
    //partners - partner details
    //check data.js for these two global variables
    this.data = window.App.globalPartnersData;

    //Items needed for side menu
    //need more research to clean this
    this.items = window.App.globalSidemenuItems;
  }

  //when state changes, render is called automatically 
  //here we can set dynamic values for the data required
  onChildChanged(newFilters) {
    this.setState({ filters: newFilters });
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
              {/*we will send filters and sorts for both elements
                 Sidemenu requires items to setup the menu and the callback to
                 let the main app know filters or sorts have changed
                 so that main content can be re-rendered.
                 data for content is all the info about partners*/}
              <div className="sidemenu"><Sidemenu items={this.items} filters={this.state.filters} callbackParent= {this.onChildChanged.bind(this)}/></div>
              <div className="main-content"><Content data={this.data} filters={this.state.filters} /></div> 
          </div>
      </div>
    );
  }
}

export default App;
