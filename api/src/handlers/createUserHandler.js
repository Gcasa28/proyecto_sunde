const createUser = require("../controllers/createUser")

createUserHandler = async (req, res) => {
    const {name, lastname, password, years} = req.body
    
    try {
        var newUser = await createUser(name.toLowerCase(), lastname, password, years)
    
        res.status(200).json(newUser)
    
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}





module.exports = createUserHandler