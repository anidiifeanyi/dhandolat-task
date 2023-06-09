const mongoose = require('mongoose')
require('dotenv').config()
const { MONGO_URI } = process.env
mongoose.set('strictQuery', false)

const connectDB = async () => {
	try {
		await mongoose.connect(MONGO_URI)
		console.log('MongoDB Connected')
	} catch (error) {
		console.log(error.message)
	}
}

module.exports = connectDB
