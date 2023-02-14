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
});

router.delete("/:taskId", async function () {});

export { router };
