require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    console.error("Error fetching holdings:", error.message);
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    console.error("Error fetching positions:", error.message);
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.send("Order saved!");
  } catch (error) {
    console.error("Error saving order:", error.message);
    res.status(500).json({ error: "Failed to save order" });
  }
});

console.log("MONGO URL exists:", !!uri);

mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connected successfully");

    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
    console.error(error);
  }