const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Recipe = new Schema({
  recipename: {
    type: String,
    required: true,
    unique: true,
  },
  ingrediants: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  today:{
    type:String
  }
});

const newRecipe = mongoose.model("recipe", Recipe); // create collection in mongodb
module.exports = newRecipe;
