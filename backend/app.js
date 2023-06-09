const express = require('express')
const connectToDb = require('./config/connectToDb')
const xss = require('xss-clean')
const rateLimiting = require('express-rate-limit')
const helmet = require('helmet')
const hpp = require('hpp')
const { errorHandler, notFound } = require('./middlewares/error')
const cors = require('cors')
const shapesRouter = require('./routes/shapes')
require('dotenv').config()

// Connection To Db
connectToDb()

// Init App
const app = express()

// Middlewares
app.use(express.json())

// Security Headers (helmet)
app.use(helmet())

// Prevent Http Param Pollution
app.use(hpp())

// Prevent XSS(Cross Site Scripting) Attacks
app.use(xss())

// Rate Limiting
app.use(
  rateLimiting({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 200
  })
)

app.post('/api/shapes', async (req, res) => {
  try {
    const { shapes } = req.body

    // Create a new shape instance and save it to the database
    const shape = new Shape({ shapes })
    await shape.save()

    res.status(200).json({ success: true })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})
// Cors Policy
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
)

// Routes
app.use('/api/auth', require('./routes/authRoute'))
app.use('/api/users', require('./routes/usersRoute'))
app.use('/api/posts', require('./routes/postsRoute'))
app.use('/api/comments', require('./routes/commentsRoute'))
app.use('/api/categories', require('./routes/categoriesRoute'))
app.use('/api/password', require('./routes/passwordRoute'))

app.use('/shapes', shapesRouter)
// Error Handler Middleware
app.use(notFound)
app.use(errorHandler)

// Running The Server
const PORT = process.env.PORT || 8000
app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)
