const mongoose = require("mongoose");

// setup schema
const userSchema = mongoose.Schema({
	first_name: {
		type: String,
		trim: true,
		required: [true, "First name is required"],
	},
	last_name: {
		type: String,
		trim: true,
		required: [true, "Last name is required"],
	},
	phone: {
		type: String,
		trim: true,
		required: [true, "Phone is required"],
	},
	email: {
		type: String,
		index: true,
		lowercase: true,
		trim: true,
		required: [true, "Email is required"],
	},
	password: {
		type: String,
		trim: true,
		required: [true, "Password is required"],
	},
	user_type: {
		type: String,
		trim: true,
		required: [true, "User type is required"],
	},
	avatar: {
		type: String,
		trim: true,
	},
});

userSchema.path("email").validate(async (email) => {
	const emailCount = await mongoose.models.user.countDocuments({ email });
	return !emailCount;
}, "Email already exists");

// export product model
const User = (module.exports = mongoose.model("user", userSchema));

module.exports.get = (callback, limit) => {
	User.find(callback).limit(limit);
};
