import React from "react";
import ReactDOM from "react-dom";
import { Map, GoogleApiWrapper } from 'google-maps-react';



class MapContainer extends React.Component{

    initialLocation = {
        lat: 0,
        lng: 0
    };

    zoom = 14;

    constructor(){
        super();
        this.state = { 
            lat: this.initialLocation.lat,
            lng: this.initialLocation.lng
        }
    }

    componentDidMount(){
        if(navigator && navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.setState({ lat: position.coords.latitude, lng: position.coords.longitude})
                    this.centerMap();
                    console.log(this.state);
                }, err => console.log(err)
            )
        }
    }


    centerMap(){
        let node = ReactDOM.findDOMNode(this.refs.map);
        const mapConfig = Object.assign(
            {},
            {
              center: this.state,
              zoom: this.zoom
            })

        let map = new this.props.google.maps.Map(node, mapConfig);
        map.panTo(this.state);
    }

    render(){

        return(
            <Map ref="map" 
            google={this.props.google}/> 
        )
    }
}

export default GoogleApiWrapper({apiKey: "AIzaSyC3xwMr4zglsFqaAzuyIcOy_s9PwuIcAPw"})(MapContainer);