import axiosInstance from "../middleWares/axiosInterceptor";
import {FETCH_USER} from "./action.Types";
import constant from "../config/constant";
import {toast} from "react-toastify";

export const fetchUser=()=>dispath=>{
    axiosInstance.get(constant.user)
        .then(result=>{
            dispath({
                type:FETCH_USER,
                data:result.data
            });
        })
        .catch(err=>{
            toast.error("Something Went Wrong")
            console.log("error in fetching user",err);
        })
};