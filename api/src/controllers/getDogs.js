const axios = require('axios')
const { extractDogInfo, dogsDbWithTemperaments } = require("../utils")
const { Dog, Temperament } = require("../db")
const {API_KEY} = process.env


const getDogs = async () => {
    const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)

    
    const dogsApi = data.map( dog => {
        return extractDogInfo(dog)
        })

    const infoDB = await Dog.findAll({
        include: Temperament  // Incluye los temperamentos asociados   
    })

    const dogsDB = dogsDbWithTemperaments(infoDB);
        

    const allDogs = [...dogsApi, ...dogsDB]
        
    return allDogs
    
}

module.exports = getDogs