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
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps){
            this.setState({
                content: this.props.content,
                title: this.props.title,
                edited: moment(new Date(this.props.edited)),
                created: moment(new Date(this.props.created)),
            });
        }
    }

    render(){
            return (
                <>
                    <Card border="black" className="m-2" bg="dark" text="light" onClick={this.props.editorActivation}>
                        <Card.Body className="Note-content">
                            <Card.Title>
                                {this.state.title}
                            </Card.Title>
                            {this.state.content}
                        </Card.Body>
                        <div className="d-flex justify-content-between">
                            <Card.Subtitle className="text-muted d-block mx-2">{this.state.edited.format("H:mm")}</Card.Subtitle>
                            <Card.Subtitle className="text-muted d-block mx-2">{this.state.edited.format("DD/MM/YYYY")}</Card.Subtitle>
                        </div>
                    </Card>
                </>
            );
        }
}


export  default Note;
