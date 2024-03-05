const juegosRouter = require("./juegos");
const plataformasRouter = require("./plataformas");
const userRoutes = require("./users");

const mainRouter = require("express").Router();

mainRouter.use("/juegos", juegosRouter);
mainRouter.use("/plataformas", plataformasRouter);
mainRouter.use("/users", userRoutes);

module.exports = mainRouter