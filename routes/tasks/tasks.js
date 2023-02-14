import { Router } from "express";

import { Task } from "../../models/task/task.js";

const router = Router();

router.get("/", async function (request, response) {
  const tasks = await Task.find();
  response.json(tasks);
});

router.post("/", async function (request, response) {
  const task = new Task(request.body);
  console.log(task);
  // await task.save();
  // response.json(task);
});

router.patch("/:taskId", async function () {});
router.delete("/:taskId", async function () {});

export { router };
