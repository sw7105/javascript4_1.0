"use strict";

const express = require("express");
const { type } = require("os");
const app = express();

// Cm4_1.1.
app.get("/math/circle/:r", (req, res) => {
  let radius = parseFloat(req.params.r);
  let area = Math.PI * radius * radius;
  let circumference = 2 * Math.PI * radius;
  res.json({ area: area.toFixed(2), circumference: circumference.toFixed(2) });
});

// Cm4_1.2.
app.get("/math/rectangle/:width/:height", (req, res) => {
  let width = parseFloat(req.params.width);
  let height = parseFloat(req.params.height);
  let area = width * height;
  let perimeter = width * (a + height);
  res.json({ area: area, perimeter: perimeter });
});

// Cm4_1.3.
app.get("/math/power/:base/:exponent", (req, res) => {
  const { root } = req.query;

  try {
    let json = {};
    let base = parseFloat(req.params.base);
    let exponent = parseFloat(req.params.exponent);

    if (isNaN(base) || isNaN(exponent)) {
      throw new TypeError(
        "Invalid input. Both base and exponent must be numbers.",
      );
    }

    json.result = Math.pow(base, exponent);
    if (root === "true") {
      if (base < 0) {
        throw new Error("Invalid input. Base must be non-negative.");
      }
      json.root = Math.sqrt(base);
    }
    res.json(json);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
