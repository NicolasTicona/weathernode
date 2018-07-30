const {argv} = require('./config/yargs')
const {getPlace} = require('./place/place')
const {weatherPlace} = require('./weather/weather')

let getInfo = async (direccion) => {

    try{

        let coors = await getPlace(direccion)
        let temp = await weatherPlace(coors.lat,coors.lng)
    
        return `El clima en ${coors.direccion} es de ${temp}`
    
    }catch(e) {

        return `No se pudo determinar el clima en ${direccion}`
    }

}

getInfo(argv.direccion)
    .then( res => console.log(res))
    .catch( err => console.log(err))