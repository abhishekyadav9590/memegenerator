import React,{Component} from "react";
class Tools extends Component{

    render() {
        return(
            <div className={"tools bg-success border"} style={{width:"300px"}} tabIndex={"1"}>
                <h5>Tools</h5>
                <div className="input-group">
                    <label htmlFor={'imageupload'} className={'btn btn-info text-left'}>
                        <i className="fa fa-photo"></i> Upload
                    </label>
                <input type="file" className={"hide"} accept={'image/*'} id={'imageupload'}/>
                </div>
            </div>
        )
    }
}

export default Tools;