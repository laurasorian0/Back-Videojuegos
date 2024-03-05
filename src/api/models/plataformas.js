const mongoose = require("mongoose");

const plataformaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  imagen: { type: String, required: true },
  juegos: [{ type: mongoose.Types.ObjectId, ref: "juegos", required: false }]
}, {
  timestamps: true,
  collection: "plataformas"
});

const Plataforma = mongoose.model("plataforma", plataformaSchema, "plataforma");
module.exports = Plataforma;