import mongoose from "mongoose";

export async function dbConnect() {
  try {
    let conn = await mongoose
      .connect(String(process.env.MONGO_DB_CONNECTION_STRING), {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        connectTimeoutMS: 20000, // 20 seconds
      })
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("Error connecting to MongoDB:", err));
    mongoose.set("debug", true);
    return conn;
  } catch (e) {
    throw new Error(e);
  }
}
