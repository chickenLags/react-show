import React from "react";
import newsItem from "./NewsItem";

class Nieuws extends React.Component{

    constructor(){
        super();
        this.state = {
            failed: false,
            hasReceivedNews:false
        };
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => this.setState( {
            hasReceivedNews: true,
            nieuws: data
        })).catch(error => this.setState({
            failed: true
        }))
    }


    render(){
        let response = (this.state.hasReceivedNews) ? 
            this.state.nieuws.map( attributes => React.createElement(newsItem, {key: attributes.id, attributes})) :
            (this.state.failed) ? 
                <h1> Failed to fetch news </h1> : 
                <h1>Loading</h1>

        return (
            response
        )
    }


}


export default Nieuws;