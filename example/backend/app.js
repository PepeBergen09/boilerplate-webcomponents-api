const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();

// db
// MONGO_URI=mongodb://localhost/nodeapi
mongoose
    .connect(
        process.env.MONGO_URI,
        { useNewUrlParser: true }
    )
    .then(() => console.log("DB Connected"));

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`);
});

// bring in routes
const dataRoutes = require("./api/data/routes");
const postRoutes = require("./api/posts/posts.route");

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use("/", dataRoutes);
app.use("/posts", postRoutes);

const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log(`A Node Js API is listening on port: ${port}`);
});
