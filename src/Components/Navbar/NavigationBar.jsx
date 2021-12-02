import React from 'react'
import { Navbar, Container, Nav} from "react-bootstrap";
import LogoImg from "../../Images/Logox2-Bener.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons'

export default function NavigationBar() {
    let first_name = localStorage.getItem("first_name")
    return(
        <>
            <Navbar collapseOnSelect expand='sm' fixed="top" variant="dark" style={{backgroundColor:'#1A1A1A',borderBottom:"2px solid grey"}}>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Nav.Link href="/" >
                            <img
                                src={LogoImg}
                                width="125"
                                height="30"
                                className="d-inline`-block align-top" 
                                alt=""  
                            />
                        </Nav.Link>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="ms-auto">
                            <Nav.Link href="/" style={{color:'white'}}>Home</Nav.Link>
                            <Nav.Link href="#toprated" style={{color:'white'}}>Top Rated</Nav.Link>
                            <Nav.Link href="/list-movies" style={{color:'white'}}>List Movies</Nav.Link>
                            {localStorage.getItem("user_id") !==  null ? (
                                <Nav.Link href="/profile" style={{color:'white'}}>Hi {first_name}! </Nav.Link>
                            ) : (
                                <Nav.Link href="/login" style={{color:'white'}}>
                                    <FontAwesomeIcon icon={faUser} fixedWidth />
                                </Nav.Link>

                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
