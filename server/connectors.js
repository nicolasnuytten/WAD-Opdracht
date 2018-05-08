const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/nicolasnuytten");

const EventSchema = mongoose.Schema(
  {
    _id: String,
    name: String,
    date: String,
    money: String,
    text: String
  },
  {
    timestamps: true
  }
);

const Event = mongoose.model("event", EventSchema);

module.exports = { Event };
