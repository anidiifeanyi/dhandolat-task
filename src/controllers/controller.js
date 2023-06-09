require('dotenv').config()
const storeUsers = require('../model/usermodel')

// Register user
exports.addUser = async (req, res) => {
	const { firstName, lastName, tel, email } = req.body

	if (!firstName || !lastName || !tel || !email) {
		return res.status(400).send({ message: 'All fields Must be added' })
	}

	try {
		const newUser = new storeUsers({
			firstName,
			lastName,
			email,
			tel
		})

		await storeUsers.create(newUser)

		res.status(201).json({ message: 'User Created' })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// Get user
exports.getUser = async (req, res) => {
	try {
		const user = await storeUsers.findOne({ _id: req.params.id })

		res.status(201).json({ user })
	} catch (error) {
		console.log(error)
	}
}

// Update user
exports.updateUser = async (req, res) => {
	const { firstName, lastName, tel, email } = req.body

	if (!firstName || !lastName || !tel || !email) {
		return res.status(400).send({ message: 'All fields Must be updated' })
	}

	try {
		const updateuser = await storeUsers.findByIdAndUpdate(req.params.id, {
			firstName,
			lastName,
			email,
			tel
		})

		res.status(201).json({ message: 'User Updated', updateuser })
	} catch (error) {
		console.log(error)
	}
}
