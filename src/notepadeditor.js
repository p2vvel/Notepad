import React from "react";

import {Card, Button, Form, OverlayTrigger, Tooltip, Container, Col, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ColorPickerForm from "./color_picker";

import {Trash} from "react-bootstrap-icons";



class NoteEditor extends React.Component{
    constructor(props) {
        super(props);
        this.restoreState(props);



        this.handleBackgroundExit = this.handleBackgroundExit.bind(this);
        this.handleBackgroundClick = this.handleBackgroundClick.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.restoreState = this.restoreState.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    restoreState(props){
        // console.log(this.props.target);

        //true for editing existing note, false for creating new note
        this.edit = this.props.target !== undefined;


        this.state = {
            temp_title: (this.edit ? props.target.title : ""),
            temp_content: (this.edit  ? props.target.content : ""),
            temp_color: (this.edit ? props.target.color : "dark"), //default note color is bootstrap "dark"
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //props have changed = different note is being edited, so state have to be restored to default state
        if(this.props !== prevProps)
            this.restoreState();
    }


    componentDidMount(){
        this.escape_event = (e) => {
            if(e.key === "Escape")
                this.handleBackgroundExit();
        };
        //pressing esc will cancel editing note or ask user if he wants to save it
        window.addEventListener("keydown", this.escape_event);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.escape_event);
    }

    handleBackgroundExit(){
        let save = ((this.edit && this.props.target.content === this.state.temp_content && this.props.target.title === this.state.temp_title) ||
            (!this.edit && this.state.temp_title === "" && this.state.temp_content === "")) ?
            false :
            window.confirm("Save document?");

        if (save)
            this.props.onSave({
                title: this.state.temp_title,
                content: this.state.temp_content,
                created: this.edit ? this.props.target.created : new Date().getTime(),
                edited: new Date().getTime(),
                key: this.edit ? this.props.target.key : undefined,
                color: this.state.temp_color,
            });
        else
            this.props.onCancel();
    }

    handleBackgroundClick(e) {
        //triggered only if clicked on dark background around note-edit-form
        if (e.target === e.currentTarget)
            this.handleBackgroundExit();
    }


    handleTitleChange(e){
        this.setState({temp_title: e.target.value});
    }

    handleContentChange(e){
        this.setState({temp_content: e.target.value})
    }

    handleColorChange(new_color){
        this.setState({temp_color: new_color});
    }

    render(){
        let condition = this.state.temp_title === "" && this.state.temp_content === "";
        let text = ["success", "warning", "info", "light"].find(e => e === this.state.temp_color) !== undefined ? "dark" : "light";
        let variant = this.state.temp_color !== "dark" ? this.state.temp_color : "secondary";
        let save_button = (
            <Button onClick={() => this.props.onSave({
                title: this.state.temp_title,
                content: this.state.temp_content,
                created: this.edit ? this.props.target.created : new Date().getTime(),
                edited: new Date().getTime(),
                key: this.edit ? this.props.target.key : undefined,
                color: this.state.temp_color,
            })} variant={`${variant} mr-1 my-1`} disabled={condition} style={condition ? {pointerEvents: "none"} : {}}>Save</Button>);



        return (
            <div className="Note-edit-background" onClick={this.handleBackgroundClick}>
                <Container fluid>
                    <Row>
                        <Col className="col-12 col-lg-10 offset-lg-1">
                            <Card border="black" bg={"dark"} text="light" className="Note-editable">
                                <Card.Body className="d-flex flex-column align-items-center">
                                    <Form.Control placeholder="Title" className={`form-control m-2 bg-dark border-secondary text-light`} value={this.state.temp_title} rows="1" onChange={this.handleTitleChange}/>
                                    <textarea placeholder="Content" spellCheck={false} className={`form-control flex-grow-1 m-2 bg-dark border-secondary text-light Note-content-editable`} value={this.state.temp_content} onChange={this.handleContentChange}/>
                                    <div className="d-flex justify-content-between w-100">
                                        <div>
                                            {this.edit && <Button onClick={this.props.onDelete} variant={`outline-secondary mr-1 my-1`}>
                                                <Trash/>
                                            </Button>}{/*Shows delete button only if user is editing already existing note*/}
                                        </div>
                                        <ColorPickerForm handleColorChange={this.handleColorChange} currentColor={this.state.temp_color}/>
                                        <div className="d-flex justify-content-end flex-wrap">
                                            <Button onClick={this.props.onCancel} variant={`outline-secondary mr-1 my-1`}>Cancel</Button>
                                            {condition
                                                ?
                                                <OverlayTrigger
                                                    overlay={<Tooltip className="tooltip-disabled" style={{zIndex: 3000}}>Can't save empty Note!</Tooltip>}>
                                        <span className="d-inline-block">
                                            {save_button}
                                        </span>
                                                </OverlayTrigger>
                                                :
                                                <>{save_button}</>}
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default NoteEditor;
