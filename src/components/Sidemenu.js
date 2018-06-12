import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';

//using the code provided by react-sidenav
export default class Sidemenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filters:this.props.filters};
        this.addFilters = this.addFilters.bind(this);
    }
 
    addFilters(event){
      //to avoid default behavior being repeated
      event.preventDefault();
      //makeshift for now
      let value = event.target.innerText;
      this.state.filters.push(value);
      //lets the main content know that it should rerender itself
      this.props.callbackParent(this.props.filters);
    }

    render() {
      return (
        <div style={{background: '#eee', color: '#333', width: 220}}> 
          <SideNav highlightColor='#333' highlightBgColor='#ddd' defaultSelected='dashboard'>       
              <Nav id='dashboard'>
                <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
                <NavText> Sort </NavText>
                <Nav id='dashboard'>
                <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
                <NavText><div onClick={this.addFilters}> Alphabetically (a-z) </div></NavText>
                </Nav>
              </Nav>
              <Nav id='sales'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> Sales </NavText>
              </Nav>
          </SideNav>
        </div>
      )
    }
}