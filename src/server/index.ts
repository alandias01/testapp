//const express = require("express");
import express from "express";

const app = express();

app.get("/a", (req, res) => {
  res.send("Here");
});

app.listen(3001, () => {
  console.log("Connected");
});
