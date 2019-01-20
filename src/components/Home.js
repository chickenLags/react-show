import React from "react";

class Home extends React.Component{

    style = {
        margin: "auto",
        display: "block"
    }

    render(){
        return(
            
        <img 
            src="./img/ym_avatar-gradient2.jpg" 
            alt="Young Maverick Logo"
            style={this.style}
            />
        )
    }

}


export default Home;