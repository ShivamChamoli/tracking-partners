import React, { Component } from 'react';
import Section from './Section.js';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    //Render does not like for loops so we are creating sections 
    //and then returning them which can be returned by render
    createSections(){
        let sections = []
        for (let i = 0; i < this.props.data.sections; i++) {
            let sectionId = 'section-'+i;
            //creating the sections for different types of partners
            sections.push(<Section id={sectionId} key={sectionId}/>);
        }
        return sections;
    }
    render() {
      return (
        <div>
            {this.createSections()}
        </div>
      );
    }
  }