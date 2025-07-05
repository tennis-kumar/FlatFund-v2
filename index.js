import app from "./app.js";
import config from "./config/env.js"; // Handles env validation
import connectDB from "./db/mongo.js";

const PORT = config.port;


const startServer = async () => {
  try {
    console.log("[DB] Connecting to database...");
    await connectDB(); 

    const server = app.listen(PORT, () => {
      console.log(`[SERVER] Running on http://localhost:${PORT} (${config.env} mode)`);
      console.log("[SERVER] Press CTRL+C to stop");
    });

    // Graceful shutdown for local dev
    process.on("SIGINT", () => {
      console.log("\n[SERVER] Shutting down gracefully...");
      server.close(() => {
        console.log("[SERVER] Closed");
        process.exit(0);
      });
    });

  } catch (err) {
    console.error("[ERROR] FATAL STARTUP ERROR:", err);
    process.exit(1); // Crash hard on startup failure
  }
};

// Crash safety nets (log errors but don't crash for rejections in dev)
process.on("unhandledRejection", (err) => {
  console.error("[ERROR] UNHANDLED REJECTION:", err);
});

process.on("uncaughtException", (err) => {
  console.error("[ERROR] UNCAUGHT EXCEPTION:", err);
  process.exit(1); // Crash on uncaught errors
});

startServer();