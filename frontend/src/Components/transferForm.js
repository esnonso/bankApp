import { Button , Container, Row, Col, Form} from 'react-bootstrap';
import '../transferForm.css'

const TransferForm =({onClose}) => {
    return(
        <Container className="modals">
        <Container className="modals-content">
                <button type="button"
                    className="btn-danger modal-close-btn" 
                    onClick = {onClose}
                    >X
                </button>
            <Container className="modals-header">
                <h4 className="modals-title">WBB TRANSFER FORM</h4>
            </Container>
            <Container className="modals-body">
                <Form>
                    <Row>
                        <Col xs={4} lg={4}>
                            <Form.Label>Account Name</Form.Label>
                            <input type="text" className="form-control"></input>
                        </Col>
                        <Col>
                            <Form.Label>Account Type</Form.Label>
                            <select name="accountType" id="accountType" className="form-control">
                            <option>Select</option>
                            <option value="checking">Checkings</option>
                            <option value="saving">Savings</option>
                            </select>
                        </Col>
                        <Col>
                            <Form.Label>Beneficiary Bank Name</Form.Label>
                            <input type="text" className="form-control"></input> 
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" lg="4">
                            <Form.Label>Account Number</Form.Label>
                            <input type="number" className="form-control"></input>
                        </Col>
                        <Col xs="4" lg="4">
                            <Form.Label>Routing Number</Form.Label>
                            <input type="number" className="form-control"></input>
                        </Col>
                        <Col>
                            <Form.Label>Amount</Form.Label>
                            <input type="number" className="form-control"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4}>
                            <Form.Label>Tranfer Type</Form.Label>
                            <select name="transferType" id="transferType" className="form-control">
                            <option>Select</option>
                            <option value="wire">Wire Transfer</option>
                            <option value="mobile">Mobile Deposit</option>
                            </select>
                        </Col>
                        <Col xs={4} lg={4}>
                            <Form.Label>Address</Form.Label>
                            <input type="text" className="form-control"></input>
                        </Col>
                        <Col xs={4} lg={4}>
                            <Form.Label>Zip</Form.Label>
                            <input type="number" className="form-control"></input>
                        </Col>
                    </Row>
                    <h4 className="modals-title">FILL THIS SECTION FOR WIRE TRANSFERS ONLY</h4>
                    <Row>
                        <Col>
                            <Form.Label>SWIFT or BIC code</Form.Label>
                            <input type="number" className="form-control"></input>
                        </Col>
                        <Col>
                            <Form.Label>International Bank Account Number</Form.Label>
                            <input type="number" className="form-control"></input>
                        </Col>
                    </Row>
                    <Form.Label>Reason for Transfer</Form.Label>
                    <textarea id="w3review" className="form-control lil-mar" rows="4" cols="50" /> 
                    <Button variant="secondary" size="lg" block><h3>Proceed</h3></Button>  
                </Form>
            </Container>
            <Container className="modals-footer">
                <Button className="btn btn-danger button" onClick={onClose} size="lg">Close</Button>
            </Container>
        </Container>
    </Container>
    )
}


export default TransferForm;