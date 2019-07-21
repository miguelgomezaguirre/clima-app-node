const axios = require('axios');

const getLugarLatLong = async(direccion) => {
    const encodedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedURL }`,
        headers: { 'X-RapidAPI-Key': '43454c5e0dmsh47c341bda429495p1dababjsne83cbedd2160' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`no hay resultados para ${ direccion }`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        dir,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLong
}