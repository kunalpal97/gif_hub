// this is my express entry point everything is there 

// backend/src/server.ts
import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { connectDB } from "./utils/db";

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI!; // non-null assertion; ensure .env is set

// First, connect to the database
connectDB(MONGODB_URI).then(() => {
  // Then start the HTTP server
  app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
  });
});
