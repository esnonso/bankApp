import { Container, Jumbotron } from "react-bootstrap";
const Business = () => {
    return(
        <div className="container">
                <Jumbotron className="text-center">
                         <h1>World Best Bank Image</h1>
                         <p className="text-muted">A local Bank to serve the world</p>
                </Jumbotron>
            <div className="panel panel-default">
                <div className="panel-heading" style={{textAlign:'center'}}><h1>Business Checkings</h1></div>
                <div className="panel-body">
                    <p>
                        World Best Bank has built a reputation of outstanding service to our business customers and our communities.
                    </p>
                    <p>
                        At World Best, we understand the local economy and we make taking care of your business our business. Our service
                        help you manage your finances so you are free to focus on other important things - like growing a successful business.
                    </p>
                    <ul>
                        <li>Minimum deposit to open account</li>
                        <li>$7.50 monthly service charge fee</li>
                        <li>No per check charge for first 100 checks written per statement cycle</li>
                        <li>Free Internet Banking with Online Bill Payment available (upon approval)</li>
                        <li>Merchant Services Available</li>
                    </ul>
                    <p>
                         Stop by our bank regarding your specific business needs.
                    </p>
                </div>
            </div>

            <div className="panel panel-default">
                <div className="panel-heading" style={{textAlign:'center'}}><h1>Business And Commercial Loans</h1></div>
                <div className="panel-body">
                    <p>
                        At World Best Bank we make local decisions. We tailor our commercial loans and lines to the specific needs of our 
                        customers. We offer short, intermediate, and long term financing with competitive interest rates and flexible terms.
                        We know Southern Delaware. At County Bank we understand the root of your business and we will help it grow.
                    </p>
                    <ul>
                        <li>Business Loans</li>
                        <li>Commercial Mortgages</li>
                        <li>Agricultural Loans</li>
                        <li>Credit Cards</li>
                    </ul>
                    <p>
                        <b>Term Loans:</b>World Best Bank provides local business financing that facilitates expansion.
                        Term loan uses include construction, capital improvements, and existing business purchases, large capital investments in property, plant and equipment.
                    </p>
                    <p>
                    <b>Line of Credit:</b>
                     Business lines of credit are used to finance ongoing working capital needs and are a great way to sure up short-term cash flow.
                    </p>
                    <p>
                         Stop by our bank regarding your specific business needs.
                    </p>
                </div>
            </div>

            <div className="panel panel-default">
                <div className="panel-body" style={{color:'white', backgroundColor:"#023b47", borderRadius:'10px'}}>
                <p>
                In both business and home, We are truly the best!
                </p>
                </div>   
            </div>
        </div>
    )
}

export default Business;