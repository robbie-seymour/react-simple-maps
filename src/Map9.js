import React,{Component} from 'react';
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet';
export default function Map9() {
    const source = `<MapContainer center={[40.505, -100.09]} zoom={13} >
        
    <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    </MapContainer>`
    const getBlobURL = (code, type) => {
        const blob = new Blob([code], { type })
        return URL.createObjectURL(blob)
      }
    return getBlobURL(source, 'text/javascript')
}
