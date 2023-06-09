// backend/models/Shape.js

const mongoose = require('mongoose')

const shapeSchema = new mongoose.Schema({
  type: String,
  coordinates: []
})

const ShapeModel = mongoose.model('Shape', shapeSchema)

module.exports = ShapeModel
