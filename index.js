import express from "express";
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes.js';
import connection from "./connect/connection.js";
import menuRoutes from "./routes/menu.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

const port = process.env.PORT || 4500;

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
}));

app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);

app.get("/", (req, res) => {
    res.send("server started");
});

app.listen(port, () => {
    connection();
    console.log(`Server is running on ${port}`);
});