const {checkIfEmpty , populateTemperaments} = require('../utils')


const getTemperamentsHandler = async (req, res) => {
    try {
        const empty = await checkIfEmpty()
        if (empty) {
            await populateTemperaments()
            res.status(200).send("Tabla poblada")
        } else {
            return res.status(200).send('La tabla "temperaments" ya tiene datos')
        }
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = getTemperamentsHandler