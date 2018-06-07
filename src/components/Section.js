import React, { Component } from 'react';
import '../css/Section.css';
import { Row, Col } from 'react-bootstrap';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div className="partner-section">
              <Row className="partner-header">
                        <Col xs={12} md={12}>hi</Col>
              </Row>
              <Row className="partners">
                        <Col xs={12} md={12}> {this.props.id} </Col>
              </Row>
              {/*<div className="partner-header"/>
              <div className="partners">
                {this.props.id}
        </div>*/}
          </div>
        );
    }
}