import express from "express";
import regeneratorRuntime from "regenerator-runtime";
import cors from "cors";
import "dotenv/config";
import morgan from "morgan";

//Databases connection
import "./database";

//Routes
import controversialRoutes from "./routes/controversial.routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//Routes
app.use("/api/controversial", controversialRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));