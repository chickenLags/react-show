import React from "react";

class Home extends React.Component{

    style = {
        margin: "auto",
        display: "block"
    }
    

    render(){
        return(
            
        <img 
            src="./img/awesomeface.png" 
            alt="awesomeface"
            style={this.style}
            />
        )
    }

}

Home.prototype.description = "This is the home page."


export default Home;