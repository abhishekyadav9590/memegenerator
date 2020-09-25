import {LOAD_FILE,CHANGE_TEXT,CHANGE_COLOR,CHANGE_OUTLINE} from "./action.Types";

export const loadFile=(file)=>dispatch=>{
            dispatch({
                type:LOAD_FILE,
                data:URL.createObjectURL(file)
            });
};
export const changeText=(text)=>dispatch=>{
    dispatch({
        type:CHANGE_TEXT,
        data:text
    });
}
export const changeColor=(color)=>dispatch=>{
    dispatch({
        type:CHANGE_COLOR,
        data:color
    });
}
export const changeOutline=(color)=>dispatch=>{
    dispatch({
        type:CHANGE_OUTLINE,
        data:color
    });
}