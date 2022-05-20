const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 8080;

const corsOptions = {
	origin: "*",
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};

// import Routes
let apiRoutes = require("./routes/api-routes");

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use(bodyParser.json());
app.use(cors(corsOptions));

// connection with db
mongoose
	.connect(process.env.MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("connection successful"))
	.catch((err) => console.log(err));

// use api routes in the app
app.use("/", apiRoutes);

// app listener
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
