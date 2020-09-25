import React,{Component} from "react";
import {
    Form, FormGroup, FormLabel, FormText, FormControl,
    Button,ListGroup,ListGroupItem,Spinner
} from "react-bootstrap";
import constant from "../../config/constant";
import {RegisterUser} from "../../Actions/authAction";
import {Link} from "react-router-dom";

class SignUp extends Component{
    constructor(props) {
        super(props);
        this.state={
            email:"videomaaza@gmail.com",
            password:"password",
            registering:false,

        }
    }
    componentDidMount() {
        if (localStorage.getItem('token')){
            this.props.history.push('/')
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    };
    handleRegistrationStates=()=>{
        this.setState({
            registering:false
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.setState({
            registering:true
        })
        RegisterUser(this.state,this.props.history,this.handleRegistrationStates)
    }

    render() {
        const {email,password,registering}=this.state;
        return(
            <section className={"loginSection"}>
                <div className={"loginForm"}>
                    <Form onSubmit={this.handleSubmit}>
                        <h3 className={"text-center"}>Welcome to MEME Generator</h3>
                        <hr/>
                        <FormGroup controlId={"EmailID"}>
                            <FormLabel>Email ID</FormLabel>
                            <FormControl type={"email"}
                                         placeholder={"Enter Email"}
                                         value={email}
                                         name={"email"}
                                         onChange={this.handleChange}
                            />
                            <FormText className="text-muted">
                                We'll never share your email with anyone else.
                            </FormText>
                        </FormGroup>
                        <FormGroup controlId={"password"}>
                            <FormLabel>Password</FormLabel>
                            <FormControl type={"password"}
                                         placeholder={"Enter Password"}
                                         value={password}
                                         name={"password"}
                                         onChange={this.handleChange}
                            />
                            <FormText className={"text-right"}>
                                <a href={"#forgot"}>Forget password</a>
                            </FormText>
                        </FormGroup>
                        <Button type={"submit"} value={"signup"} title={"Sign Up"} variant={"primary"} disabled={registering} className={"mb-1"}>
                            {
                                registering ?(<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>):null
                            } {" "}
                            Sign Up
                        </Button>
                        {' '}
                        <Link to={"login"} className={"btn btn-outline-primary mb-1"}>
                            Already have account
                        </Link>
                        <div className={"mt-3"}>
                            <FormText muted={"text-muted"}>
                                or you can join with us :
                            </FormText>
                            <ListGroup horizontal>
                                <ListGroupItem>
                                    <a href={constant.AuthURL.Google}>
                                        <i className={"fa fa-google"}></i> {' '}
                                        Google
                                    </a>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <a href={constant.AuthURL.Facebook}>
                                        <i className={"fa fa-facebook"}></i> {' '}
                                        Facebook
                                    </a>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Form>
                </div>
            </section>
        );
    }
}
export default SignUp;