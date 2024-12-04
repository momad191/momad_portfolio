import mongoose from "mongoose";

export async function dbConnect() {
  try {
    let conn = await mongoose.connect(
      String(
        "mongodb://momad-profile:Profile123@momad-cluster-shard-00-00.jqf41.mongodb.net:27017,momad-cluster-shard-00-01.jqf41.mongodb.net:27017,momad-cluster-shard-00-02.jqf41.mongodb.net:27017/my-profile?ssl=true&replicaSet=MOMAD-Cluster-shard-0&authSource=admin&retryWrites=true&w=majority"
      )
    );
    return conn;
  } catch (e) {
    throw new Error(e);
  }
}
