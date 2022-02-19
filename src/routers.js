const express = require('express')
const router = express.Router()
const anotationsController = require('./controllers/anotationControllers')
const priorityController = require('./controllers/anotationControllers')

//Rotas annotation
router.post('/anotation',anotationsController.create)
router.get('/anotation',anotationsController.read)
router.delete('/anotation/:id',anotationsController.delete)

//Rotas priority
router.get('/priorities',priorityController.read)
module.exports = router
