const mongoose = require("mongoose");

// setup schema

const orderSchema = mongoose.Schema(
	{
		shippingAddress: {
			name: {
				type: String,
				trim: true,
				required: true,
			},
			email: {
				type: String,
				trim: true,
				required: true,
			},
			phone: {
				type: String,
				trim: true,
				required: true,
			},
			country: {
				type: String,
				trim: true,
				required: true,
			},
			district: {
				type: String,
				trim: true,
				required: true,
			},
			area: {
				type: String,
				trim: true,
				required: true,
			},
			postCode: {
				type: String,
				trim: true,
				required: true,
			},
			address: {
				type: String,
			},
		},
		checkoutSummary: {
			subtotal: Number,
			shippingCharge: Number,
			total: Number,
			discount: Number,
			payableTotal: Number,
		},
		paymentMethod: {
			enum: ["Cash on Delevery", "Bkash", "Nagad"],
			type: String,
		},
		cart: [
			{
				_id: String,
				name: String,
				price: Number | String,
				description: String,
				image: String,
				category: String,
			},
		],
		status: {
			enum: ["Pending", "Cancel", "Done"],
			type: String,
		},
	},

	{ timestamps: true }
);

// export product model
const Order = (module.exports = mongoose.model("order", orderSchema));

module.exports.get = (callback, limit) => {
	Order.find(callback).limit(limit);
};
