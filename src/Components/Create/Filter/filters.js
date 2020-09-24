import React,{Component} from "react";

class Filters extends Component{
    render() {
        return (
            <div className={"filters bg-info"} style={{width:"300px"}} tabIndex={"3"}>
                <h5>Filters</h5>
                <div className="top-text">
                    <div className="input-group mb-2">
                        <input type="text" className={'form-control'} placeholder={'Top text'} title={"Top Text"}/>
                    </div>
                    <div className="input-group">
                        <input type="color" name={'color'} className={'form-control mr-1'} title={"Text Color"}/>
                        <input type="color" name={'outline-color'} className={'form-control'} title={"Outline Color"}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Filters;