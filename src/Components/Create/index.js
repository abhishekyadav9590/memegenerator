import React,{Component} from "react";
import Tools from "./Tools/tools";
import Filters from "./Filter/filters";
import Image from "react-bootstrap/Image";
class Create extends Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }
    render() {
        return(
            <div className={"Creator d-flex mt-1"} style={{height:"400px"}}>
                <Tools/>
                <div className={"bg-dark text-white"} style={{width:"100%"}} tabIndex={"2"}>
                    <h5>Creator</h5>
                    <Image src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'} width={"100%"}/>
                </div>
                <Filters/>
            </div>
        )
    }


}

export default Create;