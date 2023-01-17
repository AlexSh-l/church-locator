export const getChurchList = async (cityLocation) => {
    const CHURCH_INFO_URL = `https://apiv4.updateparishdata.org/Churchs/?lat=${cityLocation.lat}&long=${cityLocation.lng}&pg=1`

    let result = await fetch(CHURCH_INFO_URL, { method: "GET" })
    let json = await result.json()

    return json
}
