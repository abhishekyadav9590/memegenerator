import React,{Component} from "react";

class SaveToken extends Component{
    componentDidMount() {
        const token=(this.props.location.search).split('=')[1];
        localStorage.setItem("token",token);
        this.props.history.push('/');
    }
    render() {
        return(
            <span></span>
        );
    }
}

export default SaveToken;