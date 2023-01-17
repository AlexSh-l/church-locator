import React from "react";

import { DROPDOWN_ELEMENT } from "../constants/CssClasses";

const DropdownList = (props) => {
    return (
        <div>
            <select className={DROPDOWN_ELEMENT} value={props.selectedItemName} onChange={e => {
                return props.setSelectedItemName(e.target.value)
            }}>
                {props.itemList.map(item => {
                    return <option value={item.name} key={item.name}>{item.name}</option>
                })}
            </select>
        </div>
    )
}

export default DropdownList
