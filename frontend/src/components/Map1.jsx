import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import your custom marker icon image
import customMarkerIcon from './station.png';

// Create a custom icon using the custom marker icon image
const customIcon = L.icon({
  iconUrl: customMarkerIcon,
  iconSize: [32, 32], // Adjust the size of the icon as needed
});

const Map1 = ({ stations }) => {
  const polylinePositions = stations.map((station) => [
    station.latitude,
    station.longitude,
  ]);

  return (
    <MapContainer
      center={[36.36152402701944, 6.606813784175824]}
      zoom={12.5}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>OpenStreetMap</a> contributors"
      />
      <Polyline positions={polylinePositions} color="blue" />
      {stations &&
        stations.map((station) => (
          <Marker
            key={station.id}
            position={[station.latitude, station.longitude]}
            icon={customIcon} // Set the custom icon for the marker
          >
            <Popup>
              <div>
                <h4>{station.name}</h4>
                <p>{station.description1}</p>
                <p>{station.description2}</p>
                <p>{station.description3}</p>
                <img src={station.image} alt='station' width='150px' height='120px'/>
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default Map1;
