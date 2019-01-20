import React from "react";
import Button from "./Button";

class Footer extends React.Component{
    style = {
        width: "100%",
        height: "100px",
        backgroundColor: "black",
        position: "fixed",
        bottom: "0px",
        left: "0px",
        display:"flex"
    };


    render(){
        const buttons = this.props.pages.map(page => React.createElement(Button, 
            {   key: page.name, 
                page, handleClick: this.props.handleClick }));
        return(
            <div className="FooterDiv" style={this.style}>
                {buttons}
            </div>
        )
    }
}

export default Footer;