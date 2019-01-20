import React from "react";

class newsItem extends React.Component{

    render(){

        

        return(
            <div className="NewsItemDiv">
                <h3>{this.props.attributes.title}</h3>
                <p>{this.props.attributes.body}</p>
            </div>
            
        )
    }
}



export default newsItem;