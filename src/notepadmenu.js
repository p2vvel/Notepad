import React from "react";
import {Navbar, Nav, Form, Button, FormControl, Row, Col, Container} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {PlusSquare, PlusCircle, Plus} from "react-bootstrap-icons"


class NotepadMenu extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
        <>
            <Navbar bg="dark" variant="dark" expand="sm"  sticky="top" className="justify-content-between">
                <Navbar.Brand href="#">Notepad</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-content"/>
                <Navbar.Collapse id="navbar-content" className="justify-content-end align-items-center">
                    <Form inline className="d-flex justify-content-end flex-grow-1">
                        <FormControl type="text" placeholder="Search notes..." className="m-1"/>
                        {/*<Button variant={"outline-info"} className="m-1 ">Search</Button>*/}
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
        );
    }
}

export default NotepadMenu;
