const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const port = 8080;

// import Routes
let apiRoutes = require("./api-routes");

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use(bodyParser.json());

// connection with db
mongoose
	.connect(process.env.MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("connection successful"))
	.catch((err) => console.log(err));

// root
app.get("/", (req, res) => {
	res.send("e-furniture server running!");
});

// use api routes in the app
app.use("/api", apiRoutes);

// app listener
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
