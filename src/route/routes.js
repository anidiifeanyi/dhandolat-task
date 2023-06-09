const express = require('express')
const controller = require('../controllers/controller')

const router = express.Router()

router

	// Register User
	.post('/registeruser', controller.addUser)

	// Get User
	.get('/getuser/:id', controller.getUser)

	// Update User
	.put('/updateuser/:id', controller.updateUser)

module.exports = router
