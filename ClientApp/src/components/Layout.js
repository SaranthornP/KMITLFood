import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { BottomNav } from './BottomNav';
import './BottomNav.css';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className="Vbody">
        <NavMenu />
        <Container className='dfq'>
          {this.props.children}
         </Container>
        <BottomNav />
      </div>
    );
  }
}
