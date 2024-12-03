const { Router } = require("express")
const getDogsHandler = require('../handlers/getDogsHandler')
const getDogByIdHandler = require("../handlers/getDogByIdHandler")
const createDogHandler = require("../handlers/createDogHandler")

const dogsRoutes = Router()

dogsRoutes.get("/", getDogsHandler)

dogsRoutes.get("/:id", getDogByIdHandler)

dogsRoutes.post("/", createDogHandler)

module.exports = dogsRoutes;