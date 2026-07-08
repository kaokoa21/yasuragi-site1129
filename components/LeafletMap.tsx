"use client";

import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Next.js/Leaflet
const iconUrl = 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png';
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png';

const customIcon = new L.Icon({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});

export default function LeafletMap() {
    // Coordinates
    const shizuokaStation: [number, number] = [34.9715, 138.3891];
    // 静岡市駿河区敷地2-26-2 左京ビル201
    const shikiji: [number, number] = [34.95147, 138.414917];
    // 静岡市葵区三番町23-6
    const sanbancho: [number, number] = [34.9761, 138.3683];
    // 静岡市駿河区小鹿2-39-1
    const petitOga: [number, number] = [34.9731, 138.4221];
    // 静岡市駿河区中田1-9-21
    const nakada: [number, number] = [34.965484, 138.391963];

    return (
        <MapContainer
            center={shizuokaStation}
            zoom={13}
            style={{ height: '100%', width: '100%', minHeight: '400px', zIndex: 0 }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={shikiji} icon={customIcon}>
                <Tooltip direction="top" offset={[0, -36]} opacity={1} permanent={false} className="map-label">
                    <strong>やすらぎの家 敷地</strong>
                </Tooltip>
            </Marker>

            <Marker position={sanbancho} icon={customIcon}>
                <Tooltip direction="top" offset={[0, -36]} opacity={1} permanent={false} className="map-label">
                    <strong>やすらぎの家 三番町</strong>
                </Tooltip>
            </Marker>

            <Marker position={petitOga} icon={customIcon}>
                <Tooltip direction="top" offset={[0, -36]} opacity={1} permanent={false} className="map-label">
                    <strong>やすらぎの家 小鹿</strong>
                </Tooltip>
            </Marker>

            <Marker position={nakada} icon={customIcon}>
                <Tooltip direction="top" offset={[0, -36]} opacity={1} permanent={false} className="map-label">
                    <strong>やすらぎの家 中田</strong>
                </Tooltip>
            </Marker>
        </MapContainer >
    );
}
