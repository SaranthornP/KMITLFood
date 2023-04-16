import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './BottomNav.css';
import fb from './icon/fb.png'
import line from './icon/line.png'
import ig from './icon/Ig.png'

export class BottomNav extends Component {
    static displayName = BottomNav.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (

            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm bg-dark border-bottom box-shadow mb-3" container light>
                    <NavbarBrand tag={Link} to="/"><img className="Icon" src={ fb } alt="Facebook" width='30'></img></NavbarBrand>
                    <NavbarBrand tag={Link} to="/"><img className="Icon" src={ line } alt="Facebook" width='30'></img></NavbarBrand>
                    <NavbarBrand tag={Link} to="/"><img className="Icon" src={ ig } alt="Facebook" width='30'></img></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} className="text-white" to="/">นโยบายความเป็นส่วนตัว</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-white" to="/counter">ช่วยเหลือ</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-white bg-dark rounded" to="/fetch-data">ติดต่อเรา</NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}
