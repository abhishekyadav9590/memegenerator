import React from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import SaveToken from '../Components/utilities/index';
import Dashboard from '../Components/Dashboard/index';
const Routes =()=>{
    return(
        <React.Fragment>
            <Switch>
                <Route exact path={"/login"} component={Login} />
                <Route exact path={"/signup"} component={SignUp} />
                <Route exact path={"/token"} component={SaveToken}/>
                <PrivateRoute  path={"/"} component={Dashboard}/>
                <Route render={()=><div>You are lost</div>}/>
            </Switch>
        </React.Fragment>
    );
}
const PrivateRoute=({component:Component,...restProps})=>{
    return(
        <Route
            {...restProps}
            render={(props)=>{
                return localStorage.getItem('token')?
                    <Component {...props}/>
                    :
                    <Redirect to={"/login"}/>
            }}
        />
    );
};

export default Routes;