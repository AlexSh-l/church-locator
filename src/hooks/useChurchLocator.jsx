import { useState, useEffect } from "react";

import { getChurchList } from "../middleware/ChurchLocator";

export const useChurchLocator = (cityLocation) => {
    const [churches, setChurches] = useState()

    useEffect(() => {
        const churchesInfo = async () => {
            const data = await getChurchList(cityLocation)
            setChurches(data)
        }
        churchesInfo()
    }, [cityLocation])

    return churches
}
