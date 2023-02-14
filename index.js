import mongoose from "mongoose";

mongoose.set("strictQuery", true);

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

main()
  .then(function () {
    console.log("running...");
  })
  .catch(console.log);
