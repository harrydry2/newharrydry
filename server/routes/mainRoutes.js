const mongoose = require("mongoose");
const Emails = mongoose.model("Emails");
const keys = require("../config/keys");
ObjectId = require("mongodb").ObjectID;

module.exports = app => {
  app.post("/api/savemail", async (req, res) => {
    const { email } = req.body;
    const newemail = await new Emails({ email }).save();
    res.json(newemail);
  });
};
