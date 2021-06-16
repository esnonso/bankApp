import React, { Component, useState } from 'react';
import { Container, Row, Col, Button  } from 'react-bootstrap';
import { connect } from 'react-redux';
import profileImg from '../Images/default-profile-pic.png';
import TransferForm from './transferForm';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            showForm:false,
            loading:false
        }
    }

    render(){
        const { showForm } = this.state;
        let today = new Date()
        const dd = String(today.getDate()).padStart(2, '0');
        const mm =  String(today.getDate()).padStart(2, '0');
        const yyyy = today.getFullYear();
        const hours = today.getHours()
        const minutes = today.getMinutes()
        today = `${mm}/${dd}/${yyyy} ${hours}:${minutes > 10 ? (0+minutes): minutes}`
        const {firstName, surname} = this.props.currentUser.user;
        return(
            <Container style={{padding:30, borderTop:"4px #014554 solid", borderBottom:"4px #014554 solid", borderRadius:20}}>
            <h1 className="text-center">Welcome to your Personal Dashboard</h1>
            <p className="text-right">Last Synced: {today} <Button variant="info">View Transfer History</Button> </p>
                <Row className="dashboard-acct">
                   <Col> <p><img src={profileImg} alt="Profile-pic" className="profile-pic" height="100" width="100" /> Welcome! {firstName} {surname}</p> </Col>
                    <Col >
                    <p className="text-right">ACCOUNT # 1234567890</p>
                    <p className="text-right">Bal:<strong>$2.000,000.30.54</strong> </p>
                    </Col>
                </Row>
                <Row>
                    <Col style={{padding:10}}>
                        <Button size="lg" variant="outline-secondary" onClick={()=> this.setState({showForm:true})}>Transfer</Button>
                        <Button size="lg" variant="outline-secondary">Request a Loan</Button>
                    </Col>
                </Row>
                {showForm ? <TransferForm onClose={()=>this.setState({showForm:false})} /> : null }   
                          
        </Container>
        )
    }
}


function mapStateToProps(state) {
    return{
        currentUser: state.currentUser
    }
}
export default connect(mapStateToProps, {})(Dashboard);
