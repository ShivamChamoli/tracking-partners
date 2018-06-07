import React, { Component } from 'react';
import Section from './Section.js';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    //Render does not like for loops so we are creating sections 
    //filtering the correct partners for each type and then rendering the section
    createSections(){
        let sections = []
        //filtering data based on type
        for (let i = 1; i <= parseInt(this.props.data.partnerDetails.sections,10); i++) {
            var filtered = [];
            for (let j = 1; j <= parseInt(this.props.data.partnerDetails.partnerCount,10); j++) {
                if (parseInt(this.props.data.partnerDetails.partners[j].type,10) === i) {
                    filtered.push(this.props.data.partnerDetails.partners[j].name);
                }
            }
            let sectionId = 'section-'+i;
            //creating the sections for different types of partners
            sections.push(<Section id={sectionId} key={sectionId} data={filtered} type={this.props.data.partnerDetails.categories[i]}/>);
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