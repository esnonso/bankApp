import { Container } from "react-bootstrap";
const TransferPopup = ({onClose, accountName, amount, accountNumber, bankName}) => {
   return(
    <Container className="popup-container">
    <Container className="popup-content">
           <p> <button type="button" className="btn btn-outline-danger" onClick = {onClose}>X</button></p>  
            <h1 className="modals-title text-success">SUCCESSFUL TRANSFER</h1>
            <p>You have sucessfully transfered {amount} to {accountName} {accountNumber} {bankName}</p>
            <div className="success"  onClick = {onClose}><span>&#10003;</span></div>
    </Container>
        </Container>
   )
}

export default TransferPopup;