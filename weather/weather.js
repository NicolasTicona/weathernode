const axios = require('axios')

const weatherPlace = async (lat, lng) => {
    
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=67c943885246687c60631d01cd591290`)

    return res.data.main.temp
}

module.exports = {
    weatherPlace
}