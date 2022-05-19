const mongoose = require("mongoose");

// setup schema
const productSchema = mongoose.Schema({
	name: String,
	price: String | Number,
	description: String,
	image: String,
	category: String,
	subCategory: String,
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
