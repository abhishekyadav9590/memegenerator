import React,{Component} from "react";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Image,Col} from 'react-bootstrap'
import logo from "../../Assets/Images/meme-generator.png"
import {Link} from "react-router-dom";

class NavBar extends Component{
    constructor(props) {
        super(props);
    }
    logout=()=>{
        localStorage.removeItem('token');
        this.props.history.push('/');
    }
    render() {
        const {user}=this.props;
        let displayName=user.displayName
        if (!displayName){
            displayName="MG User"
        }
        return (
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                            <Image src={logo} roundedCircle width={"30px"} className={"mr-1"}/>
                        Meme Generator
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={"ml-auto"}>
                            <NavDropdown title={displayName} id="collasible-nav-dropdown">
                                    {/*<Link to={"/dashboard"} className={"dropdown-item"}>*/}
                                    {/*Dashboard*/}
                                    {/*</Link>*/}
                                    <Link to={"/profile"} className={"dropdown-item"}>
                                    Profile
                                    </Link>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href={"/"} onClick={this.logout}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}
export default NavBar;