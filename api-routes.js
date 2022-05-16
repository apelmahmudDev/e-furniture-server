const express = require("express");
const router = express.Router();

// set default API response
router.get("/", (req, res) => {
	res.json({
		status: "API its working",
		message: "Welcome to our e-furniture",
	});
});

// Export api routes
module.exports = router;
