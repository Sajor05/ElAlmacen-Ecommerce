import cors from "cors";
import morgan from "morgan";
import express from "express";
import { connection } from "./db/db.js";
import routes from "./api/endpoints.js";
import cookieParser from "cookie-parser";

const app = express();
app.set("port", process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  }),
);
app.use(cookieParser());
app.use("/api", routes);
app.get("/", (req, res) => {
  res.send("Backend");
});
connection();

app.listen(app.get("port"), () => {
  console.log(`Escuchando puerto ${app.get("port")}`);
});
