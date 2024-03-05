
const { isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
const { getUsers, register, login } = require("../controllers/users");

const userRoutes = require("express").Router();

userRoutes.get("/", [isAdmin], getUsers);
userRoutes.post("/register", upload.single("imagenPerfil"), register);
userRoutes.post("/login", login);

module.exports = userRoutes;