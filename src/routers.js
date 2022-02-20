const express = require('express')
const router = express.Router()
const anotationsController = require('./controllers/anotationControllers')
const priorityController = require('./controllers/priorityController')
const contentController = require('./controllers/contentController')

//Rotas annotation
router.post('/anotation',anotationsController.create)
router.get('/anotation',anotationsController.read)
router.delete('/anotation/:id',anotationsController.delete)

//Rotas priority
router.get('/priorities',priorityController.read)
router.post('/priorities/:id',priorityController.update)

//Rotas content
router.post('/content/:id',contentController.update)

module.exports = router
