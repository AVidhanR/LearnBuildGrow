import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Configure Express app to parse incoming JSON data
app.use(express.json({ limit: "16kb" }));

// Configure Express app to parse incoming URL-encoded form data
// with extended option enabled for rich objects and a limit of 16kb
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Configure Express app to serve static files from the "public" directory
app.use(express.static("public"));

export { app };
