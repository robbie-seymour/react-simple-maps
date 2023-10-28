/* global google */
import { GoogleMap, 
  Polygon, 
  MarkerF,
  Polyline, 
    useLoadScript,
    InfoWindow } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import "./Map3.css";
import { route } from "./data";
export default function Map3() {
  console.log("map content?", GoogleMap);
  const getBlobURL = (code, type) => {
    const blob = new Blob([code], { type })
    return URL.createObjectURL(blob)
  }
  //const api_key = 'AIzaSyDtYHleyRccVzR58r60bqzO8ghBcngXtT8';
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    //googleMapsApiKey: api_key,

  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  const customMarker = {
    path: "M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805",
    fillColor: "red",
    fillOpacity: 2,
    strokeWeight: 1,
    rotation: 0,
    scale: 1,
  };
  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();
  const [polygonPath, setPolygonPath] = useState();

  const markers = [
    { address: "Address1", lat: 18.5204, lng: 73.8567 },
    { address: "Address2", lat: 18.5314, lng: 73.8446 },
    { address: "Address3", lat: 18.5642, lng: 73.7769 },
  ];

  const polygonOptions = {
    strokeColor: "yellow",
    strokeOpacity: 0.5,
    strokeWeight: 3.0,
    fillColor: "red",
    fillOpacity: 0.2,
  };

  const onLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    console.log("bounds!:", bounds);
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
    const path = route;
    const bufferDistance = 0.00008;
    const x = path.map(
      (obj) =>
        new google.maps.LatLng(
          obj.lat + bufferDistance,
          obj.lng - bufferDistance
        )
    );
    path.reverse();
    const y = path.map(
      (obj) =>
        new google.maps.LatLng(
          obj.lat - bufferDistance,
          obj.lng + bufferDistance
        )
    );
    const coordinates = [...x, ...y];
    const areaBoundary = coordinates.map((obj) => {
      return { lat: obj.lat(), lng: obj.lng() };
    });
    setPolygonPath(areaBoundary);
  };

  const onMapLoad = (map) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  const handleMarkerClick = (id, lat, lng, address) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, address });
    setIsOpen(true);
  };
  const source =<div className="Map3">
  {!isLoaded ? (
    <h1>Loading...</h1>
  ) : (
    <GoogleMap
      center ={{ lat: 18.51454707519716, lng: 73.8537696352756 }}
      zoom={18}
      onLoad={onLoad}
      mapContainerClassName="map-container"
      onClick={() => setIsOpen(false)}
    >
      <Polyline path={route} />
      <Polygon path={polygonPath} options={polygonOptions} />
      {markers.map(({ address, lat, lng }, ind) => (
        <MarkerF
          key={ind}
          position={{ lat, lng }}
          onClick={() => {
            handleMarkerClick(ind, lat, lng, address);
          }}
        >
          {isOpen && infoWindowData?.id === ind && (
            <InfoWindow
              onCloseClick={() => {
                setIsOpen(false);
              }}
            >
              <h3>{infoWindowData.address}</h3>
            </InfoWindow>
          )}
        </MarkerF>
      ))}
    </GoogleMap>
  )}
</div>
  return source;
};
