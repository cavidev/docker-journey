import express from 'express'
import mongoose from 'mongoose'

const Animal = mongoose.model('Animal', new mongoose.Schema({
  tipo: String,
  nombre: String,
  estado: String,
}))

const app = express()

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://cavidev:admin@monguito:27017/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('listando... chanchitos...')
  const animales = await Animal.find();
  return res.send(animales)
})
app.get('/crear', async (_req, res) => {
  console.log('creando...')
  const count = Animal.count({});
  await Animal.create({ tipo: count%2 === 0 ? 'terrestre': 'acuatico', nombre: 'Chanchito', estado: 'Feliz' })
  return res.send('ok')
})

app.listen(3000, () => console.log('listening...'))
