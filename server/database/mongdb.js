import mongoose from "mongoose";

async function connect() {
  await mongoose.connect(
    "mongodb+srv://batros:Maestro123321@batros.zyubeio.mongodb.net/?retryWrites=true&w=majority");
  console.log("mongoDB connection is successful");
}
export default connect;
