"use strict";

const express = require("express");
const app = express();

// Cm4_1.1.
app.get("/math/circle/:r", (req, res) => {
  let radius = parseFloat(req.params.r);
  let area = Math.PI * radius * radius;
  let circumference = 2 * Math.PI * radius;
  res.json({ area: area.toFixed(2), circumference: circumference.toFixed(2) });
});

// Cm4_1.2.
app.get("/math/rectangle/:a/:b", (req, res) => {
  let a = parseFloat(req.params.a);
  let b = parseFloat(req.params.b);
  let area = a * b;
  let perimeter = 2 * (a + b);
  res.json({ area: area, perimeter: perimeter });
});

//TODO3

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
