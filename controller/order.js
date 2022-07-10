Order = require("../model/order.schema");

// handle index actions
exports.index = (req, res) => {
	Order.get((err, orders) => {
		if (err) {
			return res.json({ status: "error", message: err });
		}
		res.json({
			status: "success",
			message: "Orders retrieved successfully",
			data: orders,
		});
	});
};

// handle create order actions
exports.new = (req, res) => {
	const order = new Order(req.body);

	// save the order and check for errors
	order.save((err) => {
		if (err) {
			return res.json(err);
		}
		res.json({ message: "New order created!", data: order });
	});
};

// handle view order info by id
exports.view = (req, res) => {
	Order.findById(req.params.order_id, (err, order) => {
		if (err) {
			return res.send(err);
		}
		res.json({
			message: "Order details loaded successfully",
			data: order,
		});
	});
};
// handle order by active status
exports.viewAsStatus = (req, res) => {
	Order.find({ status: req.params.status }, (err, order) => {
		if (err) {
			res.send(err);
		}
		res.json({
			message: "Order details loaded successfully",
			data: order,
		});
	});
};

// handle update product info
exports.update = (req, res) => {
	Order.updateOne(
		{ _id: req.params.order_id },
		{
			$set: {
				status: req.body.status,
			},
		},
		(err) => {
			if (err) {
				res.status(500).json({
					error: "There was a server side error!",
				});
			} else {
				res.status(200).json({
					message: "Order updated successfully!",
				});
			}
		}
	);
};

// handle delete order
exports.delete = (req, res) => {
	Order.deleteOne(
		{
			_id: req.params.order_id,
		},
		(err, order) => {
			if (err) {
				res.send(err);
			}
			res.json({
				status: "success",
				message: "Order deleted successfully",
			});
		}
	);
};
