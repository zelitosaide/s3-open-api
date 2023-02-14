import { connect } from "mongoose";

async function main() {
  await connect("mongodb://127.0.0.1:27017/test");
}

main()
  .then(function () {
    console.log("running...");
  })
  .catch(console.log);
