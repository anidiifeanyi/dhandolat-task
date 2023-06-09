// require('dotenv').config()
const chatboxuser = require('../model/user')
const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

// Welcome
exports.chatbox = async (req, res) => {
	res.status(201).json({ message: 'Welcome to chatbox' })
}

// StartChat
exports.startChat = async (req, res) => {
	const { userName, message } = req.body

	try {
		let userMessage = new chatboxuser({ userName, message })

		io.emit('userMessage')

		let savedMessage = await userMessage.save()

		res.send(savedMessage)
	} catch (error) {
		res.sendStatus(500)
		return console.log('error', error)
	}
}

// Get all Chats
exports.chats = async (req, res) => {
	try {
		const allChats = await chatboxuser.find()

		res.status(201).json({ allChats })
	} catch (error) {
		console.log(error)
	}
}

// Get user chat
exports.userChat = async (req, res) => {
	// const user = req.params.userName

	try {
		const userMessages = await chatboxuser.find({
			userName: req.params.userName
		})

		res.status(201).json({ userMessages })
	} catch (error) {
		console.log(error)
	}
}

// Initiate socket
io.on('connection', () => {
	console.log('a user is connected')
})
