import React, { Component } from 'react';
import { Container, Row, Col, Card, Jumbotron  } from 'react-bootstrap';
import Dashboard from '../Components/dashboard';
import { connect } from 'react-redux';

class Personal extends Component {
    render(){
       const {currentUser} = this.props;
        return(
            <div>
                {this.props.currentUser.isAuthenticated ? (
                    <Dashboard/>   
                ):
                <Container>
                <Jumbotron className="text-center">
                         <h1>World Best Bank Image</h1>
                         <p className="text-muted">A local Bank to serve the world</p>
                     </Jumbotron>
             <Row >
                 <Col lg={6} xs={12}>
                     <Card>
                         <Card.Body>
                             <Card.Title><h3>Free Checking Accounts</h3></Card.Title>
                             <Card.Text>
                             <ul>
                             <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                             <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                             <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                             <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                             <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                             <li>Internet Banking</li>
                             </ul>
                             </Card.Text>
                         </Card.Body>
                     </Card>
                 </Col>
                 <Col lg={6} xs={12}>
                     <Card>
                         <Card.Body>
                             <Card.Title><h3>Free Savings Account</h3></Card.Title>
                             <Card.Text>
                             <ul>
                             <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                             <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                             <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                             <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                             <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                             <li>Internet Banking</li>
                             </ul>
                             </Card.Text>
                         </Card.Body>
                     </Card>
                 </Col>
             </Row>
 
         
         <div className="panel panel-default">
             <div className="panel-heading"><h1>Personal Loans</h1></div>
             <div className="panel-body">
                <h1>Apply in Branch</h1>
                <p className="text-muted">Local Decisions, Local People</p>
                <ul>
                    <li>Personal Loans*</li>
                    <li>Automobile Loans*</li>
                    <li>Boat Loans*</li>
                    <li>RV Loans*</li>
                </ul>
                <p>World Best Bank makes applying for a personal loan quick, easy and convenient. We offer a variety of 
                 loans to meet your individual needs. Stop by any of our convenient branch locations to inquire about 
                 our financing options, competitive interest rates and flexible terms.</p>
                 <p><b>For more information about Home Equity Loans and Lines, please visit the bank or email us today</b></p>
             </div>
         </div>
 
             <Container className="text-center container-footer">
                 <p>
                 World Best Bank is fantastic! The people there explain everything so clearly, they are concise, efficient and friendly.
                 I would recommend them to anyone in need of a loan!
                 </p>
             </Container>
         </Container>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        currentUser: state.currentUser
    }
}
export default connect(mapStateToProps, {})(Personal);
