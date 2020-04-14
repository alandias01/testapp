import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import baseRouter from "./routes/baseRoute";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.get("/do", (req, res) => {
//   res.send("running");
// });

app.use("/api", baseRouter);

mongoose
  .connect("mongodb://192.168.99.100:32768/gre", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose connected");
    app.listen(3001, () => {
      console.log("Express Connected");
    });
  })
  .catch((err) => {
    console.log(err);
  });
