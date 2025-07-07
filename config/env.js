import dotenv from "dotenv";

dotenv.config();

const requiredEnvVars = ["PORT", "MONGO_URI", "JWT_SECRET", "SESSION_SECRET", "BREVO_API_KEY","SENDER_EMAIL","MODE"]

requiredEnvVars.forEach( (key) => {
    if(!process.env[key]){
        throw new Error(`❌ Missing required environment variable: ${key}`);
    }
} )

export default {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  brevoApiKey: process.env.BREVO_API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  sessionSecret: process.env.SESSION_SECRET,
  senderEmail: process.env.SENDER_EMAIL,
  env: process.env.MODE
};