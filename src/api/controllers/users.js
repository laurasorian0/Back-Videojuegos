
const { generateSign } = require("../../config/jwt");
const User = require("../models/users");
const bcrypt = require("bcrypt")


const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error)
    return res.status(400).json(error);
  }
}

const register = async (req, res, next) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      password: req.body.password,
      rol: "user",
      imagenPerfil: req.body.imagenPerfil,
      email: req.body.email,
      anoNacimiento: req.body.anoNacimiento
    });

    const duplicateUser = await User.findOne({ userName: req.body.userName });
    if (duplicateUser) {
      return res.status(400).json("Busca otro nombre")
    }

    const userSaved = await newUser.save();
    return res.status(201).json(userSaved);

  } catch (error) {
    console.log(error)
    return res.status(400).json(error);
  }
}

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });

    if (!user) {
      return res.status(400).json("Usuario no existente");
    }

    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSign(user._id);

      return res.status(200).json({ user, token });
    } else {
      return res.status(400).json("La contraseña está mal");
    }
  } catch (error) {
    return res.status(400).json(error);
  }
}



module.exports = { getUsers, register, login }