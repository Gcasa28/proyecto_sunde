const getDogs = require("../controllers/getDogs")
const getDogsByName = require("../controllers/getDogsByName")



const getDogsHandler = async (req, res) => {
    const {name} = req.query

    try {
        if (name) {
            const dogByName = await getDogsByName(name.toLowerCase())

            res.status(200).json(dogByName)
            
        } else { 
            const dogs = await getDogs()

            res.status(200).json(dogs)
        }
    } catch (error) {
        
    }
}


module.exports = getDogsHandler