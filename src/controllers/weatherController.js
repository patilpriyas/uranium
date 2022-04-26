const axios = require("axios");


let getWeather = async function (req, res) {
    try {
        let city = req.query.q
        let appid = req.query.appid

        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }

        let result = await axios(options)
        let data = result.data
        console.log(data)
        res.status(200).send({ msg: data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getTemp = async function (req, res) {
    try {
        let cityTemp = req.query.q
        let appid = req.query.appid

        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cityTemp}&appid=${appid}`
        }

        let result = await axios(options)
        let data = result.data.main.temp
        console.log(data)
        res.status(200).send({ msg: data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let sortedCityTemp = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityArr = [];
        for (let i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=9d1170c37c106e8e1074b641a42ed038`)
            console.log(result.data.main.temp)
            obj.temp = result.data.main.temp
            cityArr.push(obj)

        }
        let sorted = cityArr.sort((a, b) => {
            return a.temp - b.temp
        })
        console.log(sorted)
        res.status(500).send({ status: true, msg: sorted })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getWeather = getWeather
module.exports.getTemp = getTemp
module.exports.sortedCityTemp = sortedCityTemp