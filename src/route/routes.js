const express = require('express')
const controller = require('../controllers/controller')

const router = express.Router()

router

	// Welcome user
	.get('/', controller.chatbox)

	// Start a chat
	.post('/chats', controller.startChat)

	// All chats
	.get('/chats', controller.chats)

	// User chat
	.get('/chats/:userName', controller.userChat)

module.exports = router
