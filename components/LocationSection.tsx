/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styles from "./LocationSection.module.css";

import icon from "leaflet/dist/images/marker-icon.png";
import icon2x from "leaflet/dist/images/marker-icon-2x.png";
import shadow from "leaflet/dist/images/marker-shadow.png";
import { Location } from "@/constants/locations";
import PopupComponent from "./PopupComponent";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: icon,
  iconRetinaUrl: icon2x,
  shadowUrl: shadow,
});

interface Props {
  locations: Location[];
}

export default function LocationSection({ locations }: Props) {
  const center =
    locations.length >= 2
      ? {
          lat: (locations[0].lat + locations[1].lat) / 2,
          lng: (locations[0].lng + locations[1].lng) / 2,
        }
      : locations[0] || { lat: 50.45, lng: 30.52 };

  return (
    <div className={styles.wrapper}>
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={13}
        className={styles.map}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((loc) => (
          <Marker
            key={[loc.lat, loc.lng].join("-")}
            position={[loc.lat, loc.lng]}
          >
            <Popup>
              <PopupComponent {...loc} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
