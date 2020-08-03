import React from "react";

import {Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Plus} from "react-bootstrap-icons";

class AddButton extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Button variant="info" className="p-1 m-1" style={{position: "fixed", bottom: "10px", right: "10px"}} onClick={this.props.handleClick}>
                <Plus size={32}/>
            </Button>
        );
    }
}


export default AddButton;
