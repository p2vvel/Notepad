import React from "react";
import {Navbar, Nav, Form, Button, FormControl, Row, Col, Containem, InputGroup} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {PlusSquare, PlusCircle, Plus, X} from "react-bootstrap-icons"


class NotepadMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {search_value: ""}

        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleChange(e){
        this.setState({search_value: e.target.value},
            () => this.props.handleFilterChange(this.state.search_value));  //passes new_filter value to notepad class, that will show only notes that match the filter
    }

    handleClear(){
        this.setState({search_value: ""},
            () => this.props.handleFilterChange(this.state.search_value));
    }

    render(){
        return (
        <>
            <Navbar bg="dark" variant="dark" expand="sm"  sticky="top" className="justify-content-between">
                <Navbar.Brand href="#">Notepad</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-content"/>
                <Navbar.Collapse id="navbar-content" className="justify-content-end align-items-center">
                    <Form inline className="d-flex justify-content-end flex-grow-1">
                        <InputGroup style={{minWidth: "263px"}}>{/*minWith to prevent whole element from expanding after entering first character*/}
                            <FormControl type="text" placeholder="Search notes..." className="my-1" value={this.state.search_value} onChange={this.handleChange}/>
                            {this.state.search_value !== "" &&
                            <InputGroup.Append>
                                <Button variant="light" className="my-1 border border-left-0" onClick={this.handleClear}>
                                    <X size={16}/>
                                </Button>
                            </InputGroup.Append>
                            }
                        </InputGroup>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
        );
    }
}

export default NotepadMenu;
