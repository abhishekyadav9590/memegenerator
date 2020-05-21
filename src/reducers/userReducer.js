import {FETCH_USER} from "../Actions/action.Types";

const initialState={
    user:{
        ID:'',
        displayName:"",
        isActive:true,
        isAdmin:false,
        emailID:"",
    }
}

const userReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_USER: {
            return {...state,user: action.data}
        }
        default: {
            return state;
        }
    }
}

export default userReducer;