const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	userName: String,
	message: String,
	createdAt: {
		type: Date,
		default: Date.now()
	}
})

const storeUsers = mongoose.model('chatboxuser', userSchema)

module.exports = storeUsers
