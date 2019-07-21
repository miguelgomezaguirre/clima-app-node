const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4f9d74c0a7d16a390b06adebf2b841dd&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}