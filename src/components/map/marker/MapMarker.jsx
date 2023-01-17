import React from "react";

import { MAP_MARKER } from "../../../constants/CssClasses";

const MapMarker = (props) => {
    return (
        <div className={MAP_MARKER} lat={props.lat} lng={props.lng} onClick={() => {
            (props.popupInfo && (props.info.id === props.popupInfo.id))
                ? props.setPopupInfo(null)
                : props.setPopupInfo({ ...props.info })
        }} />
    )
}

export default MapMarker
