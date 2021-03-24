import mongoose from "mongoose";

const drinkSchema = mongoose.Schema({
  selectedFile: String,
  name: String,
  type: String,
  brewery: String,
  score: {
    type: Number,
    default: 0,
  },
  comments: String,
  username: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const DrinkModel = mongoose.model("DrinkModel", drinkSchema);
export default DrinkModel;
