import mongoose from "mongoose";
import DrinkModel from "../models/drinkModel.js";

export const getPosts = async (req, res) => {
  try {
    const drinks = await DrinkModel.find();
    console.log(drinks);
    res.status(200).json(drinks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const drink = req.body;
  const newDrink = new DrinkModel({
    ...drink,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newDrink.save();
    res.status(201).json(newDrink);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const drink = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No drink with that id");
  }

  const updatedDrink = await DrinkModel.findByIdAndUpdate(
    _id,
    { ...drink, _id },
    {
      new: true,
    }
  );

  res.json(updatedDrink);
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No drink with that id");
  }

  await DrinkModel.findByIdAndRemove(_id);
  res.json({ message: "Drink deleted successfully" });
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;

  //check auth middleware
  if (!req.userId) return res.json({ message: "User not logged in." });

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No drink with that id");
  }

  const post = await DrinkModel.findById(_id);

  const index = post.score.findIndex((id) => id === String(req.userId));
  if (index === -1) {
    //like a post
    post.score.push(req.userId);
  } else {
    //unlike a post
    post.score = post.score.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await DrinkModel.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(updatedPost);
};
