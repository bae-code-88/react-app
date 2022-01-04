import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = () => {
  return (
    <div id="map" style={{ height: "100%" }}>
      <MapContainer
        center={[52.211282, 21.147641]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.211282, 21.147641]}>
          <Popup>Tutaj Jesteśmy!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
export default Mapa;
