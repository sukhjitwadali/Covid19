import React from 'react';

import  {Navbar,Nav} from 'react-bootstrap'

function Navigationbar(props) {
  return (
    <div>
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/home">COVID - 19</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="mr-auto">
      <Nav.Link href="/list">All Countries</Nav.Link>
      <Nav.Link href="/chart">Charts</Nav.Link>
    </Nav>
    </Navbar.Collapse>
</Navbar>
      
    </div>
  );
}

export default Navigationbar;