/* global google */
import logo from './logo.svg';
import ReactMapGl from 'react-map-gl';
import './App.css';
import Map3 from './Map3'
import React,{Component} from 'react';
import Embed from 'react-embed';
// import {MapContainer} from 'react-leaflet';
// import {TileLayer,Circle,Polygon} from 'react-leaflet';
// import {Marker, Popup } from 'react-leaflet';

// import { typedjson, useTypedLoaderData } from 'remix-typedjson'
// import type { LoaderArgs } from '@remix-run/node'
// https://medium.com/scalereal/integration-of-google-maps-with-react-part-2-947f04945910
// Can take the route code and turn it into 
// Make loader function, iframe is black box to react (like a lot of things)
// Just do all the logic in another file and have that as the src in iframe!
// export const loader = async ({ request }: LoaderArgs) => {

//   return typedjson({  })
// }

// src will need new url each time and we use map3.js to feed it that new url each time
// Feature that occurs when you click is to send new api request
// BlueSAT coordinates: -33.918, 151.232
// class Basicmaps extends Component {
//   constructor(props) {
//       super(props);
//       this.state ={
//           lat : 28.63196,
//           lng : 77.22054,
//           zoom : 8,
//           center : [28.63196, 77.22054],  // Any lat long u want as centre 
//           radius : 200
//       }
//   }
// }
function App() {
    const Map = Map3
  return (
      < >
      {/* <iframe title='ST' src="https://www.google.com/maps/embed/v1/view?key=AIzaSyDtYHleyRccVzR58r60bqzO8ghBcngXtT8&center=-33.8569,151.2152" scrolling="no" height={"700px"} width={"700px"}/> */}
      {/* <iframe title='ST' src="https://www.openstreetmap.org/#map=8/-33.914/150.543" scrolling="no" height={"700px"} width={"700px"}/> */}
      {/* <iframe width="425" height="350" src={Map} scrolling="no"></iframe> */}
        {Map3}
        {/* <div width="425" height="350" scrolling="no">
          {Map}

        </div> */}
      {/* <Embed src="https://www.openstreetmap.org/#map=8/-33.914/150.543"></Embed> */}
      {/* <iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=147.48046875000003%2C-36.0268893543019%2C153.60534667968753%2C-31.746854162921395&amp;layer=mapnik&amp;marker=-33.91373381431626%2C150.54290771484375"></iframe><br/> */}
    </>
  );
}

export default App;
