import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class DisplayLogo extends Component {
    render(){
        return(
            <Jumbotron className="text-center">
                <h1>World Best Bank Image</h1>
                <p className="text-muted">A local Bank to serve the world</p>
            </Jumbotron>
        )
    }
}

export default DisplayLogo;