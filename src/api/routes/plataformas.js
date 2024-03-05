
const { isAuth } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
const { getPlataformasbyId, getPlataformas, postPlataforma, putPlataforma, deletePlataforma } = require("../controllers/plataformas");


const plataformasRouter = require("express").Router();


plataformasRouter.get("/:id", getPlataformasbyId);
plataformasRouter.get("/", getPlataformas);
plataformasRouter.post("/", [isAuth], upload.single("imagen"), postPlataforma);
plataformasRouter.put("/:id", [isAuth], upload.single("imagen"), putPlataforma);
plataformasRouter.delete("/:id", [isAuth], deletePlataforma);

module.exports = plataformasRouter;