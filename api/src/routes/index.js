const { Router } = require('express');

const dogsRoutes = require("./dogsRoutes")

const temperamentsRoutes = require("./temperamentsRoutes")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRouter.use("/dogs", dogsRoutes)

mainRouter.use('/temperaments', temperamentsRoutes)

module.exports = mainRouter;
