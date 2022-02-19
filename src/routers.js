const express = require('express')
const router = express.Router()
const anotationsController = require('./controllers/anotationControllers')


router.post('/anotation',anotationsController.create)
router.get('/anotation',anotationsController.read)
router.delete('/anotation/:id',anotationsController.delete)

module.exports = router
