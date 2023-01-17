import "./App.css";

import DropdownList from "./components/DropdownList";
import SimpleMap from "./components/map/SimpleMap";

import { useEffect, useState } from "react";

import { CITIES_LIST } from "./constants/Cities";
import { APP, DROPDOWN_CONTAINER } from "./constants/CssClasses";

const App = () => {
  const [cityName, setCityName] = useState(CITIES_LIST[0].name)
  const [cityCenter, setCityCenter] = useState(CITIES_LIST[0].location)

  useEffect(() => {
    const city = CITIES_LIST.filter(city => city.name === cityName)[0]
    setCityCenter(city.location)
  }, [cityName])

  return (
    <div className={APP}>
      <SimpleMap cityLocation={cityCenter} />
      <div className={DROPDOWN_CONTAINER}>
        <DropdownList itemList={CITIES_LIST}
          selectedItemName={cityName}
          setSelectedItemName={setCityName} />
      </div>
    </div>
  );
}

export default App;
