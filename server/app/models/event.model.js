const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
  name: String,
  date: String,
  money: Number,
  text: String
  },
{
  timestamps: true
});

module.exports = mongoose.model("Event", eventSchema);