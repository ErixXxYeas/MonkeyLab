const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  hobby: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("test", testSchema);
