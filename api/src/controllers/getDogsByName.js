const axios = require("axios")
const { extractDogInfo, dogsDbWithTemperaments } = require("../utils")
const { Dog, Temperament } = require("../db")





const getDogsByName = async (name) => {

    const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)

    const dogApi = data.map( dog => {
        return extractDogInfo(dog)
    })

    const infoDB = await Dog.findAll(
        { 
            include: Temperament  // Incluye los temperamentos asociados   
        },
        {where: {name: name}})

    const dogDB = dogsDbWithTemperaments(infoDB)

    const allDogs = [...dogApi, ...dogDB]

    return allDogs
}

module.exports = getDogsByName