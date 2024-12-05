const { Router } = require("express")
// const getDogsHandler = require('../handlers/getDogsHandler')
// const getDogByIdHandler = require("../handlers/getDogByIdHandler")
const createUserHandler = require("../handlers/createUserHandler")

const userRoutes = Router()

// userRoutes.get("/", getDogsHandler)

// userRoutes.get("/:id", getDogByIdHandler)

userRoutes.post("/", createUserHandler)

module.exports = userRoutes;