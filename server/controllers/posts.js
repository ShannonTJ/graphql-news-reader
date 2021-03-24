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
  const newDrink = new DrinkModel(drink);

  try {
    await newDrink.save();
    res.status(201).json(newDrink);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
