const axios = require("axios");
const { Dog, Temperament } = require('../db.js')
const { API_KEY } = process.env;

const dogsDbWithTemperaments = (infoDB) => { 
    return infoDB.map(dog => {
        const temperaments = (dog.temperaments).map(temp => temp.name);   // Obtiene los nombres de los temperamentos asociados
        return {
            id: dog.id,
            name: dog.name,
            image: dog.image,
            height: dog.height,
            weight: dog.weight,
            years: dog.years,
            temperaments: temperaments.join(', '),
        };  // Crea un nuevo objeto con las propiedades de la raza y los temperamentos asociados
    })  // Mapea los resultados para agregar los temperamentos asociados a cada raza de perro de la BD
};

const getDogById = async (id, source) => {

    const dog = source === "api"
        ? (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)).data
        : await Dog.findByPk(id, {
            include: Temperament
        })

        if (source === "api") {
            const dogWithImage = (await axios.get(`https://api.thedogapi.com/v1/images/${dog.reference_image_id}?api_key=${API_KEY}`)).data;
            return {
                id: dog.id,
                name: dog.name,
                image: dogWithImage.url,
                height: dog.height.metric,
                weight: dog.weight.metric,
                years: dog.life_span,
                temperaments: dog.temperament,
            }; 
        } else {
            const dogDB = dogsDbWithTemperaments([dog]);
            return dogDB
        }
}


module.exports = getDogById