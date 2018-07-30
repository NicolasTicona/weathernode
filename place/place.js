const axios = require('axios')

const getPlace = async (direccion) => {

    let encodeUrl = encodeURI(direccion)

    let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI `)
 
    if(res.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultado para la direccion ${direccion}`)
    }

    let location = res.data.results[0]
    let coors = location.geometry.location

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}


module.exports = {
    getPlace
}