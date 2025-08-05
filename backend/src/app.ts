// and in app.ts every route and middleware will be there 
// backend/src/app.ts
import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health-check

app.get("/" , (_req , res) => {

    res.send("Welcome to Backend of My project 🚀");

})


app.get("/api/health", (_req, res) => {
  res.json({ status: "OK", timestamp: Date.now() });
});

export default app;
