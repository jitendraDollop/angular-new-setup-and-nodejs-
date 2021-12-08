import mongoose from "mongoose";
import { logger } from "../../helper/logger";

export async function dbConnection(): Promise<void> {
  try {
    mongoose.set("debug", true);
    await mongoose.connect(
      process.env.DB_URL || "mongodb://localhost:27017/StudentDb"
    );
    logger("database connected  process chatbot");
  } catch (error: any) {
    logger(`database error:${error}`);
    console.log(error);
    throw new Error(error.message);
  }
}

module.exports.close = async (): Promise<void> => {
  await mongoose.disconnect();
  console.log("Database disconnected");
};
