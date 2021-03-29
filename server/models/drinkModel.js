import mongoose from "mongoose";

const drinkSchema = mongoose.Schema({
  selectedFile: String,
  name: String,
  type: String,
  brewery: String,
  score: {
    type: [String],
    default: [],
  },
  comments: String,
  username: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const DrinkModel = mongoose.model("DrinkModel", drinkSchema);
export default DrinkModel;
