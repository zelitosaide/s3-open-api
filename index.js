import mongoose from "mongoose";

mongoose.set("strictQuery", true);

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  const kittySchema = new mongoose.Schema({ name: String });
  kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };
  const Kitten = mongoose.model("Kitten", kittySchema);
  const silence = new Kitten({ name: "Silence" });
  await silence.save();
  const kittens = await Kitten.find();
  console.log(kittens);
}

main()
  .then(function () {
    console.log("running...");
  })
  .catch(console.log);
