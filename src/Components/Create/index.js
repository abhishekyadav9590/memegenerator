import React,{Component} from "react";
import Tools from "./Tools/tools";
import Filters from "./Filter/filters";
class Create extends Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }
    render() {
        return(
            <div className={"Creator d-flex mt-1"}>
                <Tools/>
                <h1 className={"bg-dark text-white"} style={{width:"100%"}} tabIndex={"2"}>Creator</h1>
                <Filters/>
            </div>
        )
    }


}

export default Create;