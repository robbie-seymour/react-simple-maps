import React,{Component} from 'react';
import {MapContainer,TileLayer,Circle,Polygon} from 'react-leaflet'
import {Marker, Popup } from 'react-leaflet'
const polygon = [
    [28.63196, 77.22054],
    [28.63196, 75.25054],
    [28.13196, 76.28054],
  ]
class Basicmaps extends Component {
    constructor(props) {
        super(props);
        this.state ={
            lat : 28.63196,
            lng : 77.22054,
            zoom : 8,
            center : [28.63196, 77.22054],  // Any lat long u want as centre 
            radius : 200
        }
    }
render() {
        const position = [this.state.lat,this.state.lng];
      return <React.Fragment>
          <h1>Hello, Component Maps</h1>
          <MapContainer center={position} zoom={this.state.zoom}>
            <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle center={this.state.center} fillColor="blue" radius={this.state.radius} />
            <Polygon color="purple" positions={polygon} />
            <Marker position={position}>
                <Popup>
                    Hello User 
                </Popup>
            </Marker>
          </MapContainer>
          
</React.Fragment>;
      
    }
}
export default Basicmaps