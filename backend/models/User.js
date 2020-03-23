const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		lowercase: true,
	},
	email: {
		type: String,
		lowercase: true,
	}
}, {
	timestamps: true
})

mongoose.model('User', UserSchema)

