import React from "react";
import Note from "./note";
import "./noteboard.css"




class Noteboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {children: props.children};
    }


    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({children: nextProps.children})
    }


    render(){
        return (
            <div className="Noteboard">
                {this.state.children}
            </div>
        )
    }


}


export default Noteboard;
