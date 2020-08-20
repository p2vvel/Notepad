import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";

class ColorPickerForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {current_color: props.currentColor};
        this.colors_list = [
            "primary", "secondary", "success", "warning",
            "danger", "dark", "light", "info",
        ];

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps){
            this.setState({current_color: this.props.currentColor});
        }
    }

    handleClick(value){
        // console.log(value);
        this.props.handleColorChange(value);
        this.setState({current_color: value});
    }

    render(){
        let temp = this.colors_list.map(e => (<ColorPicker color={e}  active={e === this.state.current_color} changeColor={this.handleClick}/>));
        return (
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    <div className="d-flex flex-nowrap">{temp.slice(0, 4)}</div>
                    <div  className="d-flex flex-nowrap">{temp.slice(4)}</div>
                </div>);
    }
}


class ColorPicker extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
            active: this.props.active || false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps){
            this.setState({
                color: this.props.color,
                active: this.props.active || false,
            });
        }
    }

    handleClick(e){
        this.props.changeColor(this.props.color);
    }

    render(){
        return (<Button
                variant={this.state.color}
                style={{height: "24px", width: "24px", boxSizing: "border-box", borderRadius: "50%", padding: "0px", margin: "3px", border: `${this.state.active ? "2px solid white" : "1px solid grey"}`}}
                onClick={this.handleClick}/>);
    }
}




export default ColorPickerForm;
