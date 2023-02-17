import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    text: { type: String },
    date: { type: Date },
    hour: { type: String },
    done: { type: Boolean },
    isRepeated: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

export const Task = model("Task", taskSchema);
