const keys = require("./config/keys");
const mongoose = require("mongoose");
const compression = require("compression");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);
require("./models/Emails.js");

const app = express();

app.use(bodyParser.json());
require("./routes/mainRoutes")(app);

// production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
  });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("listening"));
