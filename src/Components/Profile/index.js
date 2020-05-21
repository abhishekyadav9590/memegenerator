import React,{Component} from "react";
import {fetchUser} from "../../Actions/userAction";
import {connect} from "react-redux";
import Image from "react-bootstrap/Image";

class   Profile extends Component{
    constructor(props) {
        super(props);

    }
    componentDidMount() {

    }
    render() {
        const {user}=this.props;
        console.log('User in profile ',user);
        return (
            <section className={"p-3 text-center"}>
                <div className={"Profile border p-3"}>
                    <Image src={user.photoURL} className={"rounded-circle"} width={"150px"} onError={()=>{}}/>
                    <h3 className={"mt-2"}>
                        {user.displayName}
                    </h3>
                    <small>
                        <label>Email : </label>
                        <span>{
                            user.email
                        }</span>
                    </small>
                </div>
            </section>
        )
    }
}
const mapStateToProps=state=>{
    return {user:state.userReducer.user}
}
const mapDispatchToProps={
    fetchUser
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);