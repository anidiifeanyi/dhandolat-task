const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	tel: {
		type: Number,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now()
	}
})

const storeUsers = mongoose.model('users', userSchema)

module.exports = storeUsers
