const express = require("express");
const router = express.Router();
const productController = require("./productController");

// set default API response
router.get("/", (req, res) => {
	res.json({
		status: "API its working",
		message: "Welcome to our e-furniture",
	});
});

// product routes
router
	.route("/products")
	.get(productController.index)
	.post(productController.new);

router
	.route("/products/:product_id")
	.get(productController.view)
	.patch(productController.update)
	.put(productController.update)
	.delete(productController.delete);

// Export api routes
module.exports = router;
