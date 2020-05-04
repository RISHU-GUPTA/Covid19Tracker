import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
        return (
            <>
          <Navbar light expand="md">
          <div className="container ">
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-globe fa-lg"></span> World</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/india'><span className="fa fa-inr fa-lg"></span> India</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
          </div>
          </Navbar>
              </>
        )
    }
}