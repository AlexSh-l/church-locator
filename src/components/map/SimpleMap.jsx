import GoogleMapReact from "google-map-react";
import MapMarker from "./marker/MapMarker";
import PopupWindow from "./popup/PopupWindow";

import { useState } from "react";
import { useChurchLocator } from "../../hooks/useChurchLocator";

import { MAP_CONTAINER } from "../../constants/CssClasses";
import { GOOGLE_MAP_API_KEY } from "../../constants/GoogleMapApiKeys";
import { ENGLISH } from "../../constants/Locale";

const SimpleMap = (props) => {
    const [popupInfo, setPopupInfo] = useState(null)
    const churchesInfo = useChurchLocator(props.cityLocation)

    return (
        <div className={MAP_CONTAINER}>
            <GoogleMapReact bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY, language: ENGLISH }}
                center={props.cityLocation}
                defaultZoom={13}>
                {churchesInfo && churchesInfo.map(church => {
                    return <MapMarker info={{ ...church }}
                        key={church.id}
                        lat={church.latitude}
                        lng={church.longitude}
                        popupInfo={popupInfo}
                        setPopupInfo={setPopupInfo}
                    />
                })}
                {popupInfo && <PopupWindow info={{ ...popupInfo }}
                    lat={popupInfo.latitude}
                    lng={popupInfo.longitude}
                    setPopupInfo={setPopupInfo}
                />}
            </GoogleMapReact>
        </div>
    )
}

export default SimpleMap
