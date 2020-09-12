import React from "react";
import "./note.css";
import moment from "moment";

import {Card, Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


class Note extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            title: props.title,
            edited: moment(new Date(props.edited)),
            created: moment(new Date(props.created)),
            color: props.color,
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps){
            this.setState({
                content: this.props.content,
                title: this.props.title,
                edited: moment(new Date(this.props.edited)),
                created: moment(new Date(this.props.created)),
                color: this.props.color,
            });
        }
    }

    render(){
        console.log(this.state.color)
            return (
                <>
                    <Card border="black" className="m-2" bg={`${this.state.color}`}
                          text={["success", "warning", "info", "light"].find(e => e == this.state.color) !== undefined ? "dark" : "light"}
                          onClick={this.props.editorActivation}>
                        <Card.Body className="Note-content">
                            <Card.Title>
                                {this.state.title}
                            </Card.Title>
                            <Card.Text>{this.state.content}</Card.Text>
                        </Card.Body>
                        <div className="d-flex justify-content-between"  style={{fontSize: "0.9em"}}>
                            <div className="d-block mx-2">{this.state.edited.format("H:mm")}</div>
                            <div className="d-block mx-2">{this.state.edited.format("DD/MM/YYYY")}</div>
                        </div>
                    </Card>
                </>
            );
        }
}


export  default Note;
