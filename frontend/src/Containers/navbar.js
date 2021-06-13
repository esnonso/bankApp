import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity} from '@fortawesome/free-solid-svg-icons'; 
import { connect } from 'react-redux';


class NavbarComponent extends Component {
    render(){
        return(
            <Navbar expand="lg" variant="dark">
                <Navbar.Brand href="#home"><h1><FontAwesomeIcon icon={faUniversity} />World Best Bank</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/Personal"><p>Personal</p></Nav.Link>
                                <Nav.Link href="/business"><p>Business</p></Nav.Link>
                                <Nav.Link href="/about"><p>About Us</p></Nav.Link>
                                <Nav.Link href="/contact"><p>Contact Us</p></Nav.Link>
                            </Nav>
                            {this.props.currentUser.isAuthenticated ?(
                                <Nav className="ms-auto">
                                <Nav.Link ><p>Welcome Mr {this.props.currentUser.user.firstName}</p></Nav.Link>
                                </Nav>
                            ):
                            <Nav className="ms-auto">
                            <Nav.Link href="/signin"><p>Login</p></Nav.Link>
                            </Nav>
                            }

                        </Navbar.Collapse>
            </Navbar>
                     
        )
    }
}

function mapStateToProps(state) {
    return{
        currentUser: state.currentUser
    }
}
export default connect(mapStateToProps, {})(NavbarComponent);