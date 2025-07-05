import mongoose from "mongoose";
import config from '../config/env.js'

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

// Handle connection events
mongoose.connection.on("disconnected",()=>{
  console.log(" ⚠️ MongoDB Disconnected");
})

export default connectDB;