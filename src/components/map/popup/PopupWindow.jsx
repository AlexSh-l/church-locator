import React from "react";

import { POPUP_CONTENT, POPUP_WINDOW } from "../../../constants/CssClasses";

const PopupWindow = (props) => {
    return (
        <div className={POPUP_WINDOW} onClick={() => props.setPopupInfo(null)}>
            <strong className={POPUP_CONTENT}>{props.info.name}</strong>
            <label className={POPUP_CONTENT}>{props.info.church_address_street_address}</label>
            <label className={POPUP_CONTENT}>{props.info.church_address_city_name}, {props.info.church_address_providence_name}</label>
            <label className={POPUP_CONTENT}>{props.info.phone_number}</label>
            <a href={props.info.url} className={POPUP_CONTENT}>{props.info.url}</a>
        </div>
    )
}

export default PopupWindow
