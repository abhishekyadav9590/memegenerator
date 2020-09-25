import React,{Component} from "react";
import {changeText,changeColor,changeOutline} from "../../../Actions/file.Action";
import {connect} from "react-redux";

class Filters extends Component{
    handlInputChange=e=>{
        if(e.target.name=='meme-text'){
            this.props.changeText(e.target.value);
        }
        else if(e.target.name=='outline-color'){
            this.props.changeOutline(e.target.value);
        }
        else if(e.target.name=='color'){
            this.props.changeColor(e.target.value);
        }
    }
    render() {
        const {text,textColor,ShadowColor}=this.props;
        return (
            <div className={"filters bg-info"} style={{width:"300px"}} tabIndex={"3"}>
                <h5>Filters</h5>
                <div className="top-text">
                    <div className="input-group mb-2">
                        <input type="text" className={'form-control'} name={'meme-text'} placeholder={'Meme Text'} title={"Top Text"}
                        value={text} autoFocus={true}
                               onChange={this.handlInputChange}
                        />
                    </div>
                    <div className="input-group">
                        <input type="color" name={'color'}  className={'form-control mr-1'} title={"Text Color"}
                               value={textColor}
                               onChange={this.handlInputChange}/>
                        <input type="color" name={'outline-color'} className={'form-control'} title={"Outline Color"}
                               value={ShadowColor}
                               onChange={this.handlInputChange}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        Text:state.fileReducer.text,
        Color:state.fileReducer.textColor,
        ShadowColor:state.fileReducer.TextOutline
    }
}
const mapDispatchToProps={
    changeText,
    changeColor,
    changeOutline
}

export default connect(mapStateToProps,mapDispatchToProps)(Filters);