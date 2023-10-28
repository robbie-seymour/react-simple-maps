import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl =
  "pk.eyJ1IjoiZGFyZWFscm9ic2V5IiwiYSI6ImNsbmI5eTVqMjBhZDIybnFsdDRzNnFuN2QifQ.YhhmJuRDGIc05vFK-Mk3Xg"
const test = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
export default function Map2() {
  return (
    <ComposableMap>
      <Geographies geography={test}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}