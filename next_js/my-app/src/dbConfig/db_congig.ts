import { error } from "console";
import mongoose from "mongoose";

export async function connect() {
  try {
    // connecting to the db
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    // on connection - notifying us
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    // on error in connection - notifying us
    connection.on("error", () => {
      console.log("Connection is not established, due to this error: ", error);
    });
  } catch (error) {
    console.log("Something goes wrong");
    console.log(error);
  }
}
