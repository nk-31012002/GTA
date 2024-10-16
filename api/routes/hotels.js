import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//Create
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update
router.put("/:id", async (req, res) => {
  try {
    const updateHotel = new Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  try {
    Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
//Get
router.put("/:id", async (req, res) => {
  try {
    const hotel = Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Get All
router.put("/", async (req, res, next) => {


  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
