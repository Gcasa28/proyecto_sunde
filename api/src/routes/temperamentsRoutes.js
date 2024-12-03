const { Router } = require('express');
const getTemperamentsHandler = require("../handlers/getTemperamentsHandler")

const temperamentsRoutes = Router()

temperamentsRoutes.get("/", getTemperamentsHandler)

module.exports = temperamentsRoutes