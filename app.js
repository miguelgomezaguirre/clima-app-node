const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// lugar.getLugarLatLong(argv.direccion)
//     .then(respuesta => console.log(respuesta));

// clima.getClima(40.750000, -74.000000)
//     .then(resp => console.log(resp))
//     .catch(e => console.log(e));

const getInfo = async(direccion) => {
    try {
        const latLong = await lugar.getLugarLatLong(direccion);
        const climaResp = await clima.getClima(latLong.lat, latLong.lon);

        return `El clima para ${latLong.dir} es de ${climaResp}`;
    } catch (error) {
        return `No se pudo determinar el clima para ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));