import React from "react";

class Button extends React.Component{
    style = {
        color: "gray",
        margin: "auto"
    }

    constructor(){
        super();
        this.setState = this.setState.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.setState( {
            page: this.props.page,
            clickFunction: this.props.handleClick
        });
        
    }

    handleClick(e){
        this.state.clickFunction(e, this.state.page);
        
    }



    render(){

        return(
            <div style={this.style} onClick={this.handleClick}> 
                <h2> {this.props.page.name} </h2>
            </div>
        )
    }
}

export default Button;