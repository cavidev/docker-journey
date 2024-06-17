import express from "express";
import mongoose from "mongoose";
import zoo from "./zoo.js";

const Animal = mongoose.model(
  "Animal",
  new mongoose.Schema({
    tipo: String,
    nombre: String,
    numero_de_patas: Number,
  })
);

const app = express();

mongoose.set("strictQuery", false);
//mongodb://username:password@host:port/database?options
mongoose.connect(
  "mongodb://cavidev:admin@animals:27017/animalsdb?authSource=admin"
);

app.get("/", async (_req, res) => {
  console.log("listando... zoo...");
  const animales = await Animal.find();
  return res.send(animales);
});
app.get("/crear", async (_req, res) => {
  console.log("creando...");
  const animal = zoo[Math.floor(Math.random() * 7) + 1];
  await Animal.create(animal);
  return res.status(200).send(animal);
});

app.listen(3000, () => console.log("listening..."));
