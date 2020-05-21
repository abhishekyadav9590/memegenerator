import axios from "axios";
import constant from "../config/constant";
import {toast} from "react-toastify";

export const LoginUser=(data,history,handleLoggingInStates)=>{
    axios.post(constant.AuthURL.Local,{
            email:data.email,
            password:data.password,
    })
        .then(result=>{
            handleLoggingInStates()
            localStorage.setItem("token",result.data.token);
            history.push("/")
        })
        .catch(err=>{
            toast.error("Something Went Wrong")
        })
};
export const RegisterUser = (data,history,handleRegistrationStates) => {
    axios.post(constant.AuthURL.LocalRegister, {
        email: data.email,
        password: data.password
    })
        .then(result => {
            handleRegistrationStates();
            console.log(result)
            // history.push('/otp')
    })
        .catch(err => {
            console.log(err)
        })
};
