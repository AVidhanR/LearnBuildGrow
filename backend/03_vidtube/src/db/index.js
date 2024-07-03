import mongoose, { connectionInstance } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

    console.log(
      `\n MongoDB connected: ${connectionInstance.connection.host} \n`
    );
  } catch (error) {
    console.log("DB error", error.message);
    process.exit(1);
  }
};

export default connectDB;
