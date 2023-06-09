// backend/controllers/shapesController.js

const ShapeModel = require('../models/Shape')

// Save shapes to the database
const saveShapesToDatabase = async (req, res, next) => {
  try {
    const shapesData = req.body
    await ShapeModel.create(shapesData)
    res.status(200).json({ message: 'Shapes saved successfully' })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  saveShapesToDatabase
}
