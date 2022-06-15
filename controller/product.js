Product = require("../model/product.schema");

// handle index actions
exports.index = (req, res) => {
	Product.get((err, products) => {
		if (err) {
			res.json({ status: "error", message: err });
		}
		res.json({
			status: "success",
			message: "Product retrieved successfully",
			data: products,
		});
	});
};

// handle create product actions
exports.new = (req, res) => {
	const product = new Product();
	product.name = req.body.name ? req.body.name : product.name;
	product.price = req.body.price;
	product.description = req.body.description;
	product.image = req.body.image;
	product.category = req.body.category;

	// save the product and check for errors
	product.save((err) => {
		if (err) {
			res.json(err);
		}
		res.json({ message: "New product created!", data: product });
	});
};

// handle view product info
exports.view = (req, res) => {
	Product.findById(req.params.product_id, (err, product) => {
		if (err) {
			res.send(err);
		}
		res.json({
			message: "Product details loaded successfully",
			data: product,
		});
	});
};

// handle update product info
exports.update = (req, res) => {
	Product.findById(req.params.product_id, (err, product) => {
		if (err) {
			res.send(err);
		}
		product.name = req.body.name ? req.body.name : product.name;
		product.price = req.body.price;
		product.description = req.body.description;
		product.image = req.body.image;
		product.category = req.body.category;

		// save the product and check for errors
		product.save((err) => {
			if (err) {
				res.json(err);
			}
			res.json({ message: "Product info update", data: product });
		});
	});
};

// handle delete product

exports.delete = (req, res) => {
	Product.deleteOne(
		{
			_id: req.params.product_id,
		},
		(err, product) => {
			if (err) {
				res.send(err);
			}
			res.json({
				status: "success",
				message: "Product deleted",
			});
		}
	);
};
