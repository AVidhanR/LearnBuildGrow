import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://<username>:<pwd>@backend.jx6tzwu.mongodb.net/${DB_NAME}`
    );

    console.log(`${connectionInstance.connection.host} is connected to DB`);
  } catch (error) {
    console.log("DB error", error.message);
    process.exit(1);
  }
};

export default connectDB;
