import React,{Component,useRef} from "react";
import Tools from "./Tools/tools";
import Filters from "./Filter/filters";
import Button from "react-bootstrap/Button";
import useImage from "use-image";
import {connect} from "react-redux";
import {Layer, Stage,Image,Text} from "react-konva";

const LoadImage=(file)=>{
    const [image]=useImage(file.file);
    return <Image  image={image} x={0} y={0}/>
}
class Create extends Component{
    constructor(props) {
        super(props);
        this.state = {
            stageWidth: 0,
            stageHeight: 0
        };
        this.stageRef = React.createRef();
        this.TextRef = React.createRef();
    }
    componentDidMount() {
        this.checkSize();
        window.addEventListener("resize", this.checkSize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.checkSize);
    }
    checkSize = () => {
        const width = this.container.offsetWidth;
        const height = this.container.offsetHeight;
        this.setState({
            stageWidth: width,
            stageHeight: height
        });
    };
    downloadURI = (uri, name) => {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
    handleSaveImage = event => {
        event.preventDefault();
        const dataURL = this.stageRef.current.toDataURL({
            mimeType: "image/jpeg",
            quality: 0,
            pixelRatio: 2
        });
        this.downloadURI(dataURL, "test");
    };
    render() {
        const {file:fileURL,TextData,TextColor,TextOutline}=this.props;
        const {stageWidth,stageHeight}=this.state;
        return(
            <div className={"Creator d-flex mt-1"} style={{height:"calc(100vh - 90px)"}}>
                <Tools/>
                <div className={"bg-dark text-white"} style={{width:"100%"}} tabIndex={"2"}>
                    <h5 className={'d-flex justify-content-between align-items-center'}>
                        <span>Creator</span>
                        <span>
                            <Button className={'btn-success'} onClick={this.handleSaveImage}>
                            <i className={'fa fa-download'}></i>
                                &nbsp; Save
                            </Button>
                        </span>
                    </h5>
                    <div className="Container" ref={node => {this.container = node;}}>
                        <Stage width={stageWidth} height={stageHeight} ref={this.stageRef}>
                            <Layer>
                                <LoadImage file={fileURL}/>
                                <Text
                                    text={TextData}
                                    x={stageWidth/2 - 50}
                                    y={20}
                                    fill={TextColor}
                                    fontSize={20}
                                    fontFamily={'Calibri'}
                                    padding={20}
                                    align={'center'}
                                    shadowColor={TextOutline}
                                    shadowBlur={5}
                                    draggable
                                 ref={this.TextRef}/>
                            </Layer>
                        </Stage>
                    </div>
                </div>
                <Filters/>
            </div>
        )
    }


}
const mapStateToProps=state=>{
    return {
        file:state.fileReducer.file,
        TextData:state.fileReducer.text,
        TextColor:state.fileReducer.textColor,
        TextOutline:state.fileReducer.textOutline
    }
}

export default connect(mapStateToProps)(Create);