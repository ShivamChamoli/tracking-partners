import React, { Component } from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';

export default class Sidemenu extends React.Component {
    constructor(props) {
        super(props);
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
                <NavText> Alphabetically (a-z) </NavText>
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