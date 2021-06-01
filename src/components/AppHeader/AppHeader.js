import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../images/logo.svg';

import './AppHeader.scss';

const AppHeader = () => (
  <Navbar className="app-header" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand>
      <img className="logo" src={logo} width="30" height="30" alt="Логотип" />
      Employees
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-between">
      <Nav className="user-nav">
        <NavDropdown title="Кайтмазов Шамиль" alignRight>
          <NavDropdown.Item>
            Мой профиль
          </NavDropdown.Item>
          <NavDropdown.Item>Сменить пароль</NavDropdown.Item>
          <NavDropdown.Item>Выйти</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default AppHeader;
