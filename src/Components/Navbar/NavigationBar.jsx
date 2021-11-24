import React from 'react'
import { Navbar, Container, Nav} from "react-bootstrap";
import LogoImg from "../../Images/Logox2-Bener.png"
export default function NavigationBar() {
    return(
        <>
            <Navbar collapseOnSelect expand='sm' fixed="top" style={{backgroundColor:'#1A1A1A'}}>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                    <img
                        src={LogoImg}
                        width="125"
                        height="30"
                        className="d-inline`-block align-top" 
                        alt=""  
                    />
                    <Nav className="ms-auto">
                        <Nav.Link href="#features" style={{color:'white'}}>Home</Nav.Link>
                        <Nav.Link href="#pricing"  style={{color:'white'}}>Top Rated</Nav.Link>
                        <Nav.Link href="#pricing"  style={{color:'white'}}>List Movies</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                    {/* <div>
                        <hr style={{borderTop:'3px solid white',marginTop:56,marginBottom:0,display:'block',opacity:100}}/>
                    </div> */}
            </Navbar>
        </>
    )
}
