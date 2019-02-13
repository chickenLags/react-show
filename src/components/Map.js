import React from "react";
import MapContainer from "./MapContainer";


class Map extends React.Component{

    description = "This page make use of the Google-maps-react api."

    render(){
        return(
            <MapContainer />
        )
    }
}
Map.prototype.description = "This page make use of the Google-maps-react api."
export default Map;