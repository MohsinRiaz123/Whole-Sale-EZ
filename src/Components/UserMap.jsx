import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import MarkerIcon from "../assets/Images/MarkerIcon.png";

const UserMap = ({ topRegions }) => {
  // Customize marker icon (optional)
  const customIcon = new L.Icon({
    iconUrl: MarkerIcon,
    iconSize: [32, 32],
  });

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=""
      />
      {topRegions.map((region, index) => (
        <Marker
          key={index}
          position={[region.latitude, region.longitude]}
          icon={customIcon}
        >
          <Popup>
            <div>
              <h4>{region.name}</h4>
              <p>Users: {region.userCount}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default UserMap;
