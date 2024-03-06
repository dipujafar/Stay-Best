import { useRef, useState } from "react";
import{MapContainer, TileLayer} from 'react-leaflet';
import urls from './locationURL';


const LocationMap = () => {
    const [center, setCenter] = useState({lat: 13.084622, lng: 80.248357});
    const  ZOOM_LEVEL = 9; 
    const mapRef = useRef();
    return (
        <div>
            <div className="h-screen w-full">
                <MapContainer
                center={center}
                ZOOM_LEVEL={ZOOM_LEVEL}
                ref={mapRef}
                >
                    <TileLayer url={urls?.mapTiLer?.url} attribution={urls?.mapTiLer?.attribution}></TileLayer>
                </MapContainer>
            </div>
        </div>
    );
};

export default LocationMap;