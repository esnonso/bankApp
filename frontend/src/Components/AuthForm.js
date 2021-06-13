import React, {Component} from 'react';
import { Container, Form} from 'react-bootstrap';

class AuthForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onAuth(this.state)
        .then(()=> {
            this.props.history.push('/personal')
        })
        .catch((e) => {
            return 
        })
    }

    render(){
        const {email} = this.state
        return(
            <Container>
                <h1 className="text-center">Welcome Back!</h1>
                <Form onSubmit={this.handleSubmit} style={{width:"500px", margin:"0 auto"}} >
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <input 
                            type="email"
                            placeholder="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />

                        <Form.Label>Password</Form.Label>
                        <input 
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    
                    <button type="submit" className="btn btn-primary btn-block btn-lg" >
                          Login
                    </button>
                </Form>
            </Container>
        )
    }
}

export default AuthForm;