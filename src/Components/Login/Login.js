import React,{Component} from "react";
import {
    Form, FormGroup, FormLabel, FormText, FormControl,
    Button, ListGroup, ListGroupItem, Spinner
} from "react-bootstrap";
import "./Login.css"
import constant from "../../config/constant";
import {LoginUser} from "../../Actions/authAction";
import {Link} from "react-router-dom";

class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
            email:"videomaaza@gmail.com",
            password:"password",
            isLoggingIn:false,
        }
    }
    componentDidMount() {
        if (localStorage.getItem('token')){
            this.props.history.push('/')
        }
    }
    handleLoggingInStates=()=>{
        this.setState({
            isLoggingIn:false,
        })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    };
    handleSubmit=(event)=>{
        event.preventDefault()
        this.setState({
            isLoggingIn:true
        })
        LoginUser(this.state,this.props.history,this.handleLoggingInStates)
    }

    render() {
        const {email,password,isLoggingIn}=this.state;
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
                        <Button type={"submit"} value={"Login"} title={"Login"} variant={"primary"} disabled={isLoggingIn}>
                            {
                                isLoggingIn?(<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>):null
                            }
                            Login
                        </Button>
                        {' '}
                        <Link to={"signup"} className={"btn btn-outline-primary"}>
                            Create Account
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
export default Login;