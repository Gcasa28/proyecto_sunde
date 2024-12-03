/*
const axios = require("axios")
const { Temperament } = require("./db")
const { API_KEY } = process.env;


const extractDogInfo = (dog) => {
    return {
        id: dog.id,
        name: dog.name,
        image: dog.image?.url,
        weight: dog.weight?.metric,
        height: dog.height?.metric, 
        years: dog.life_span,
        temperaments: dog.temperament,
        created: false
    }
}

const dogsDbWithTemperaments = (infoDB) => { 
  return infoDB.map(dog => {
      const temperaments = (dog.temperaments).map(temp => temp.name);   // Obtiene los nombres de los temperamentos asociados
      return {
          id: dog.id,
          name: dog.name,
          image: dog.image,
          weight: dog.weight,
          height: dog.height,
          years: dog.years,
          temperaments: temperaments.join(', '),
          created: dog.created
      };  // Crea un nuevo objeto con las propiedades de la raza y los temperamentos asociados
  })  // Mapea los resultados para agregar los temperamentos asociados a cada raza de perro de la BD
};

// const separadorTemperamentos = (temperamentos) => {
//   if (temperamentos) {
//     return temperamentos.split(",").map(temp => temp.trim());
//   }
// };


const checkIfEmpty = async () => {
    try {
        const count = await Temperament.count();
        const empty = count === 0 ? true : false
        return empty;
    } catch (error) {
        console.error('Error al verificar si la tabla está vacía:', error)
        throw error
    }
};

  const populateTemperaments = async () => {
    try {
      const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
  
      
      const temperamentsArray = data
      .map(breed => breed.temperament)  // Extrae temperamentos
      .filter(Boolean) // Filtra temperamentos no definidos
      .map(temp => temp.split(', '))  // Divide por comas
      .flat()
      
      const uniqueTemperaments = [...new Set(temperamentsArray)];
    
  
      await Promise.all(uniqueTemperaments.map(async (name) => {
        await Temperament.findOrCreate({ where: { name } });
    }))
    
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching temperaments');
    }
  };
  



module.exports = { extractDogInfo, checkIfEmpty, populateTemperaments, dogsDbWithTemperaments }
*/