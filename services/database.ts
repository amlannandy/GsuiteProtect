import mongoose from "mongoose";

const connection = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB Connected: ${conn.connection.host}`.green.inverse);
};

export default connection;
