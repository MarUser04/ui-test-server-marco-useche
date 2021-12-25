import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    dbName: "RuleOfThumb",
    useUnifiedTopology: true
  })
  .then((db) => console.log("DB is connected"))
  .catch((error) => console.log(error));
