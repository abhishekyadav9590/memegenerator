import {LOAD_FILE,CHANGE_TEXT,CHANGE_COLOR,CHANGE_OUTLINE} from "../Actions/action.Types";

const initialState={
    file:undefined,
    text:'',
    textColor:'#fff',
    textOutline:'#000'
}

const fileReducer=(state=initialState,action)=>{
    switch (action.type) {
        case LOAD_FILE: {
            return {...state,file: action.data}
        }
        case CHANGE_TEXT:{
            return {...state,text: action.data}
        }
        case CHANGE_COLOR:{
            return {...state,textColor: action.data}
        }
        case CHANGE_OUTLINE:{
            return {...state,textOutline: action.data}
        }
        default: {
            return state;
        }
    }
}

export default fileReducer;