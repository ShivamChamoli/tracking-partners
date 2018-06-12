import React from 'react';
import logo from '../logo.svg';
import ReactModal from 'react-modal';
import { Row, Col } from 'react-bootstrap';

ReactModal.defaultStyles.overlay.backgroundColor = 'gray';

export default class Image extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  //opens modal
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  //closes modal
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  //ReactModal was trying to attach before the body was loaded
  componentWillMount() {
    ReactModal.setAppElement('body');
  }

  //ReactModal in use
  //You can edit anything inside the <ReactModal> tag for 
  //the required html
  render () {
    return (
      <span key={this.props.data.id}>
        <img src={logo} onClick={this.handleOpenModal} id={this.props.data.id} alt="logo" className="partner-div" />
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Modal #1 Global Style Override Example"
            onRequestClose={this.handleCloseModal}
          >
            <Row >
                        <Col xs={1} md={4} lg={4}><img src={logo} alt="logo" /></Col>
                        <Col xs={1} md={8} lg={8}>{this.props.data.name}</Col> 
            </Row>
            <Row >
                        <Col xs={1} md={4} lg={4}>Badges</Col>
                        <Col xs={1} md={8} lg={8}>{this.props.data.name}</Col> 
            </Row>
          </ReactModal>
      </span>
    );
  }
}