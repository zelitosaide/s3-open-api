import mongoose from "mongoose";

mongoose.set("strictQuery", true);

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  const kittySchema = new mongoose.Schema({ name: String });
  const Kitten = mongoose.model("Kitten", kittySchema);

  const silence = new Kitten({ name: "Silence" });
}

main()
  .then(function () {
    console.log("running...");
  })
  .catch(console.log);
