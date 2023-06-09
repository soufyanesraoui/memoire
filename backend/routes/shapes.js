// backend/routes/shapes.js

const express = require('express')
const router = express.Router()
const ShapeModel = require('../models/Shape')

// Route to save shapes to the database
router.post('/', async (req, res, next) => {
  try {
    const shapesData = req.body
    await ShapeModel.create(shapesData)
    res.status(200).json({ message: 'Shapes saved successfully' })
  } catch (error) {
    next(error)
  }
})

module.exports = router
