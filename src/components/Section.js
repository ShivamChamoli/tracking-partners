import React, { Component } from 'react';
import '../css/Section.css';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div className="partner-section">
              <div className="partner-header"/>
              <div className="partners">
                {this.props.id}
              </div>
          </div>
        );
    }
}