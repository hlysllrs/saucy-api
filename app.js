const express = require('express')
const app = express()
const path = require('path')
const logger = require('morgan')
const favicon = require('serve-favicon')


// Middleware
app.use(express.json())
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

// API Routes

// Catch-all route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app