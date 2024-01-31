const express = require('express')
const router = express.Router()
const shopsCtrl = require('../controllers/shops')

// GET -> /api/shops - get a shop
router.get('/:id', shopsCtrl.getShop)

// GET -> /api/shops - get all shops
router.get('/', shopsCtrl.getAllShops)

// POST -> /api/shops - create a shop
router.post('/', shopsCtrl.createShop)

// PUT -> /api/shops/:id - update a shop
router.put('/:id', shopsCtrl.updateShop)

// DELETE -> /api/shops/:id - delete a shop
router.delete('/:id', shopsCtrl.deleteShop)

module.exports = router
