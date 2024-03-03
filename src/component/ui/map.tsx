import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
const position = [36.7355608, 2.9462582];

import icon from "../../assets/icons/marqueur.png";
import L from "leaflet";
import { Grid } from "@mui/material";

import { useRouter } from "next/router";

var myIcon = L.icon({
  iconUrl: icon.src,
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

var marker = null;

function MarkerCustom({ setCordinats, cordinates }: any) {
  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;

      if (marker !== null) {
        map.removeLayer(marker);
      }
      marker = L.marker([lat, lng], { icon: myIcon }).addTo(map);

      setCordinats(e.latlng);
      // console.log(e.latlng);
    },
  });
  return null;
}

const Map = ({ nameLat, nameLng, control }: any) => {
  const router = useRouter();
  const lang = router.locale;
  const [cordinates, setCordinats] = useState({});

  // console.log("cordinates", JSON.stringify(cordinates.lat));

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "600px" }}
      eventHandlers={{
        click: () => {
          // console.log("map clicked");
        },
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
     
      <MarkerCustom
        setCordinats={setCordinats}
        cordinates={cordinates}
      ></MarkerCustom>
    </MapContainer>
  );
};

export default Map;
