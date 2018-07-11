const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const EmailsSchema = new mongoose.Schema({
  email: String
});

module.exports = mongoose.model("Emails", EmailsSchema);
