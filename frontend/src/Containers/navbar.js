import React, { Component } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity} from '@fortawesome/free-solid-svg-icons'; 
import { connect } from 'react-redux';
import { logout } from '../Store/Actions/auth';


class NavbarComponent extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout()
    }
    render(){
        return(
            <Container fluid style={{padding:0}}>
            <Navbar expand="lg" variant="dark">
                <Navbar.Brand href="/"><h1><FontAwesomeIcon icon={faUniversity} />World Best Bank</h1></Navbar.Brand>
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
                                    <Nav.Link><p>Welcome! {this.props.currentUser.user.firstName} {this.props.currentUser.user.surname}</p></Nav.Link>
                                    <Nav.Link onClick={this.logout}><p>Logout</p></Nav.Link>
                                </Nav>
                            ):
                            <Nav className="ms-auto">
                            <Nav.Link href="/signin"><p>Login</p></Nav.Link>
                            </Nav>
                            }

                        </Navbar.Collapse>
            </Navbar>
                <div className="nav-pic">
                <div className="nav-pic-color">
                 <h1 >WORLD BEST BANK</h1>
                 </div>
                </div>
            </Container>           
        )
    }
}

function mapStateToProps(state) {
    return{
        currentUser: state.currentUser
    }
}
export default connect(mapStateToProps, {logout})(NavbarComponent);