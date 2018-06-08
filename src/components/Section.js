import React, { Component } from 'react';
import '../css/Section.css';
import { Row, Col } from 'react-bootstrap';
import logo from '../logo.svg';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.data);
    }
    populateSection() {
        let rows = [];
        let numberOfItems = parseInt(this.props.data.length,10); 
        for(let i=0; i<numberOfItems; i++) {
            let itemId = this.props.data[i].id;
            rows.push(<img src={logo} id={itemId} alt="logo" className="partner-div"/>)
        }
        return rows;
    }
    render() {
        return (
          <div className="partner-section">
              <Row className="partner-header">
                        <Col xs={1} md={1} lg={1}>{this.props.type}</Col>
                        <Col xs={1} md={1} lg={1}>({parseInt(this.props.data.length,10)})</Col> 
              </Row>
              <div className="partners">
                {this.populateSection()}
              </div>   
          </div>
        );
    }
}