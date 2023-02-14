import { Router } from "express";

import { Task } from "../../models/task/task.js";

const router = Router();

router.get("/", async function (request, response) {
  const tasks = await Task.find();
  response.json(tasks);
});

router.post("/", async function (request, response) {
  const task = new Task(request.body);
  await task.save();
  response.json(task);
});

router.patch("/:taskId", async function (request, response) {
  const taskId = request.params.taskId;
  const task = await Task.findOne({ _id: taskId });
  task.text = request.body.text;
  task.done = request.body.done;
  await task.save();
  response.json(task);
});

router.delete("/:taskId", async function () {
  const taskId = request.params.taskId;
  await deleteOne({ _id: taskId });
});

export { router };
