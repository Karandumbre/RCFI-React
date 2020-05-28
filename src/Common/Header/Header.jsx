import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">Top Home Loan Products</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ml-auto text-uppercase'>
                        <Nav.Link className='active'>All</Nav.Link>
                        <Nav.Link >Refinance</Nav.Link>
                        <Nav.Link >Fixed Rates</Nav.Link>
                        <Nav.Link >First Home Buyer</Nav.Link>
                        <Nav.Link >Investor</Nav.Link>
                        <Nav.Link >Next Home Buyer</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
