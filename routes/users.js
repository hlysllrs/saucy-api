const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/users')

// POST -> /api/users
router.post('/', userCtrl.create)

// POST -> /api/users/login
router.post('/login', userCtrl.login)

// GET -> /api/users/check-token
router.get('/check-token')

// PUT -> /api/users/:id
router.put('/:id')

// DELETE -> /api/users/:id
router.delete('/:id')

module.exports = router
