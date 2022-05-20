const express = require("express");
const router = express.Router();
const product = require("../controller/product");

// set default API response
router.get("/", (req, res) => {
	res.json({
		status: "API its working",
		message: "Welcome to our e-furniture",
	});
});

// product routes
router.route("/products").get(product.index).post(product.new);

router
	.route("/products/:product_id")
	.get(product.view)
	.patch(product.update)
	.put(product.update)
	.delete(product.delete);

// Export api routes
module.exports = router;
