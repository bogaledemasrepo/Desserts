import mongoose from "mongoose";
const dburl = process.env.DB_URL!;
mongoose.connect(dburl);
mongoose.connection.on("connect", () => {
  console.log("Connected successfully!!!");
});
mongoose.connection.on("error", (err) => {
  console.log("Error to connect to database!", err);
});
