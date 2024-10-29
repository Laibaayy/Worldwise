import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from "./Map.module.css"
import { MapContainer, Marker, TileLayer, Popup, useMapEvent, useMap } from "react-leaflet"
import { useSearchParams } from "react-router-dom"
import { useGeolocation } from "../Hooks/UseGeolocation"

import Logoutuser from './Logoutuser';
{/* <Logoutuser /> */ }

const Map = () => {
    const [position, setposition] = useState([0, 40])
    const [searchparam] = useSearchParams()
    const { isLoading: geolocationloading, position: geolocationposition, getPosition } = useGeolocation()

    // const maplat = searchparam.get("lat")
    // const maplng = searchparam.get("lng")
    const maplat = parseFloat(searchparam.get("lat"));
    const maplng = parseFloat(searchparam.get("lng"));
    useEffect(() => {
        if (!isNaN(maplat) && !isNaN(maplng)) {
            setposition([maplat, maplng]);
        }
        // if (maplat, maplng) setposition([maplat, maplng])
    }, [maplat, maplng])



    useEffect(() => {
        if (geolocationposition) setposition([geolocationposition.lat, geolocationposition.lng])
    }, [geolocationposition])
    return (
        <div>
            <Logoutuser />
            <button className={styles.btn} onClick={getPosition}>{geolocationloading ? "Loading..." : "Use Your Own Position"}</button>
            <MapContainer className={styles.map} center={position} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <ChangeCenter position={position} />
                <DetectClick />
            </MapContainer>
        </div >
    )
}
function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
}

ChangeCenter.propTypes = {
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

function DetectClick() {
    const navigate = useNavigate()
    useMapEvent({
        click: (e) => {
            navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
            console.log(e);
        }
    })
    return null;
}

export default Map


