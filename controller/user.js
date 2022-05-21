User = require("../model/user.schema");

// handle index actions
exports.index = (req, res) => {
	User.get((err, user) => {
		if (err) {
			res.json({ status: "error", message: err });
		}
		res.json({
			status: "success",
			message: "User retrieved successfully",
			data: user,
		});
	});
};

// handle user by email and password
exports.view = (req, res) => {
	User.findOne({ email: req.body.email }, (err, data) => {
		if (err) {
			res.json({ status: "error", message: err });
		} else {
			if (data) {
				if (data.password !== req.body.password) {
					return res
						.status(403)
						.json({ status: "error", message: "User password is incorrect!" });
				}
				res.json({ user: data });
			} else {
				return res
					.status(399)
					.json({ status: "error", message: "User email not match!" });
			}
		}
	});
};

// handle create user actions
exports.new = (req, res) => {
	const user = new User();

	user.first_name = req.body.first_name;
	user.last_name = req.body.last_name;
	user.phone = req.body.phone;
	user.email = req.body.email;
	user.password = req.body.password;

	// save the user and check for errors
	user.save((err) => {
		if (err) {
			return res.status(409).json({ status: "error", message: err });
		}
		res.json({ message: "New user created!", data: user });
	});
};
