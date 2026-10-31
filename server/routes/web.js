const express = require('express')
const { studentDisplay, studentCreate, studentView, studentUpdate, studentDelete } = require('../controllers/studentController')
const route = express.Router()


//localhost:3000/api/studentDisplay
route.get('/studentDisplay',studentDisplay)
route.post('/studentCreate',studentCreate)
route.get('/studentView/:id',studentView)
route.put('/studentUpdate/:id',studentUpdate)
route.delete('/studentDelete/:id',studentDelete)










module.exports =route