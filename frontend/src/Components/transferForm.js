import React, {Component} from 'react';
import { Button , Container, Row, Col, Form} from 'react-bootstrap';
import '../transferForm.css'
import Loader from './loaderIcon';
import TransferPopup from './popUp';

class TransferForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading:false,
            popup:false,
            accountName:'',
            amount:'',
            bankName:'',
            accountNumber:''
        }
        this.loader = this.loader.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   loader() {
        const randomSec = Math.floor(Math.random() * 10000) + 2000;
        this.setState({loading:true})
        var promise = new Promise((resolve, reject)=> {
            setTimeout(() => {
                this.setState({loading:false}); resolve()
               }, randomSec)
        })
        promise.then(()=> this.setState({popup:true}))
     };

     handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
    }


    render(){
        const {onClose} = this.props;
        const { loading, popup, accountName, amount, bankName, accountNumber } = this.state;
        return(
            <Container className="modals">
            <Container className="modals-content">
                    <button type="button"
                        className="btn btn-danger modal-close-btn" 
                        onClick = {onClose}
                        >X
                    </button>
                <Container className="modals-header">
                    <h4 className="modals-title">WBB TRANSFER FORM</h4>
                </Container>
                <Container className="modals-body">
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={4}>
                                <Form.Label>Account Name</Form.Label>
                                <input type="text" className="form-control"
                                 name="accountName"
                                  id="accountName"
                                  value={accountName}
                                  onChange={this.handleChange}></input>
                            </Col>
                            <Col xs={12} lg={4}>
                                <Form.Label>Account Type</Form.Label>
                                <select name="accountType" id="accountType"
                                name="accountType"
                                id="accountType"
                                onChange={this.handleChange}
                                 className="form-control">
                                <option>Select</option>
                                <option value="checking">Checkings</option>
                                <option value="saving">Savings</option>
                                </select>
                            </Col>
                            <Col xs={12} lg={4}>
                                <Form.Label>Beneficiary Bank Name</Form.Label>
                                <input type="text"
                                name="bankName"
                                id="bankName"
                                value={bankName}
                                onChange={this.handleChange}
                                className="form-control"></input> 
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} lg="4">
                                <Form.Label>Account Number</Form.Label>
                                <input type="number"
                                name="accountNumber"
                                id="accountNumber"
                                value={accountNumber}
                                onChange={this.handleChange}
                                className="form-control"></input>
                            </Col>
                            <Col xs={12} lg="4">
                                <Form.Label>Routing Number</Form.Label>
                                <input type="number"
                                onChange={this.handleChange}
                                className="form-control"></input>
                            </Col>
                            <Col xs={12} lg={4}>
                                <Form.Label>Amount</Form.Label>
                                <input type="number"
                                name="amount"
                                id="amount"
                                value={amount}
                                onChange={this.handleChange}
                                className="form-control"></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}lg={4}>
                                <Form.Label>Tranfer Type</Form.Label>
                                <select name="transferType" id="transferType"
                                onChange={this.handleChange}
                                className="form-control">
                                <option>Select</option>
                                <option value="wire">Wire Transfer</option>
                                <option value="mobile">Mobile Deposit</option>
                                </select>
                            </Col>
                            <Col xs={12} lg={4}>
                                <Form.Label>Address</Form.Label>
                                <input type="text"
                                onChange={this.handleChange}
                                className="form-control"></input>
                            </Col>
                            <Col xs={12} lg={4}>
                                <Form.Label>Zip</Form.Label>
                                <input type="number" 
                                onChange={this.handleChange}
                                className="form-control"></input>
                            </Col>
                        </Row>
                        <h4 className="modals-title">FILL THIS SECTION FOR WIRE TRANSFERS ONLY</h4>
                        <Row>
                            <Col xs={12} lg={6}>
                                <Form.Label>SWIFT or BIC code</Form.Label>
                                <input type="number" 
                                onChange={this.handleChange}
                                className="form-control"></input>
                            </Col>
                            <Col xs={12} lg={6}>
                                <Form.Label>International Bank Account Number</Form.Label>
                                <input type="number"
                                onChange={this.handleChange}
                                className="form-control"></input>
                            </Col>
                        </Row>
                        <Form.Label>Reason for Transfer</Form.Label>
                        <textarea 
                        onChange={this.handleChange}
                        className="form-control lil-mar" rows="4" cols="50" /> 
                        <Button type="submit" variant="outline-light" size="lg" onClick={this.loader}><h3>Proceed</h3></Button>  
                    </Form>
                </Container>
                <Container className="modals-footer">
                    <Button className="btn btn-danger" onClick={onClose} size="lg">Close</Button>
                </Container>
                {loading ? <Loader /> : null }
                {popup ? <TransferPopup accountName={accountName} amount={amount}
                accountNumber={accountNumber}
                bankName={bankName} onClose={()=>this.setState({popup:false})} /> : null }
            </Container>
        </Container>
        )
    }
}



export default TransferForm;