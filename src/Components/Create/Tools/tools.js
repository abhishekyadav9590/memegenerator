import React,{Component} from "react";
import {loadFile} from "../../../Actions/file.Action";
import {connect} from "react-redux";
class Tools extends Component{
    constructor(props) {
        super(props);
    }
    handleFileChange=e=>{
        this.props.loadFile(e.target.files[0]);
    }
    render() {
        return(
            <div className={"tools bg-success border"} style={{width:"300px"}} tabIndex={"1"}>
                <h5>Tools</h5>
                <div className="input-group">
                    <label htmlFor={'imageupload'} className={'btn btn-info text-left'}>
                        <i className="fa fa-photo"></i> Upload
                    </label>
                <input type="file" className={"hide"} accept={'image/*'} id={'imageupload'} onChange={this.handleFileChange}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return {file:state.fileReducer.file}
}
const mapDispatchToProps={
    loadFile
}

export default connect(mapStateToProps,mapDispatchToProps)(Tools);