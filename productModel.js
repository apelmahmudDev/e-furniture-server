const mongoose = require("mongoose");

// setup schema
const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	// create_date: {
	// 	Type: Date,
	// 	default: Date.now,
	// },
});

// export product model
const Product = (module.exports = mongoose.model("product", productSchema));

module.exports.get = (callback, limit) => {
	Product.find(callback).limit(limit);
};
