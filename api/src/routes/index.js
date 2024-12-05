const { Router } = require('express');

const userRoutes = require("./userRoutes")

// const temperamentsRoutes = require("./temperamentsRoutes")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const baseRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// baseRouter.use("/dogs", dogsRoutes)

// baseRouter.use('/temperaments', temperamentsRoutes)

baseRouter.use("/newuser", userRoutes);

module.exports = baseRouter;
