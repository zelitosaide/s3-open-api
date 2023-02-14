import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    text: { type: String },
    done: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

export const Task = model("Task", taskSchema);
