const { isAdmin, isAuth } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
const { getJuegos, getJuegosbyId, getJuegosByCategory, getJuegosByPrice, postJuego, putJuego, deleteJuego, getJuegosAdmin } = require("../controllers/juegos");

const juegosRouter = require("express").Router();

juegosRouter.get("/:not-verified", [isAdmin], getJuegosAdmin);
juegosRouter.get("/precio/:precio", getJuegosByPrice);
juegosRouter.get("/categoria/:categoria", getJuegosByCategory);
juegosRouter.get("/:id", getJuegosbyId);
juegosRouter.get("/", getJuegos);
juegosRouter.post("/", [isAuth], upload.single("imagen"), postJuego);
juegosRouter.put("/:id", [isAdmin], upload.single("imagen"), putJuego);
juegosRouter.delete("/:id", [isAdmin], deleteJuego);

module.exports = juegosRouter;