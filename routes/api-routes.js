const express = require("express");
const router = express.Router();
const product = require("../controller/product");
const user = require("../controller/user");
const order = require("../controller/order");

// set default API response
router.get("/", (req, res) => {
	res.json({
		status: "API its working",
		message: "Welcome to our e-furniture server",
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

// user routes
router.route("/users").get(user.index);
router.route("/sign-up").post(user.new);
router.route("/login").post(user.view);
router.route("/users/:user_id").delete(user.delete);

// order routes
router.route("/orders").get(order.index);
router.route("/order/:status").get(order.viewAsStatus);
router.route("/order").post(order.new);
router.route("/order/:order_id").put(order.update);
router.route("/order/:order_id").delete(order.delete);

// Export api routes
module.exports = router;
