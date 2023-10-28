import React, { Component } from 'react';
import ReactMapGl from 'react-map-gl'
//import Geocoder from 'react-map-gl-geocoder'
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'

const mapboxToken = 'pk.eyJ1IjoiZGFyZWFscm9ic2V5IiwiYSI6ImNsbmI5eTVqMjBhZDIybnFsdDRzNnFuN2QifQ.YhhmJuRDGIc05vFK-Mk3Xg'

class Map extends Component {
    constructor() {
      super()
      this.state = {
        viewport: {
          width: '100vw',
          height: '100vh',
          latitude: 40.78343,
          longitude: -73.96625,
          zoom: 11
        }
      }
      this.handleViewportChange = this.handleViewportChange.bind(this)
    }
    handleViewportChange(viewport) {
      this.setState(prevState => ({
        viewport: {...prevState.viewport, ...viewport}
      }))
    }
    render() {
      return (
        <div className='Map'>
        <p>
          yo
        </p>
        <ReactMapGl
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({viewport})}
          mapboxApiAccessToken={mapboxToken}
          mapStyle="mapbox://styles/mapbox/streets-v10"
          width={700}
          height={450}
          latitude={37.78}
          longitude={-122.45}
          zoom={11}
        />
        <p>
          yo
        </p>
        </div>
      )
    }
  }
  
  export default Map;