import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import { router as tasks } from "./routes/tasks/tasks.js";

mongoose.set("strictQuery", true);

const app = express();
app.use(cors());
app.use("/v1/tasks", tasks);

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/s3opendb");
    app.listen(5000);
  } catch (error) {
    console.log(error);
  }
}

main();
