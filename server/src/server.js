import express from "express";
import dotenv from "dotenv";
import appRouter from "./Routes/productsRoutes.js"
import cors from "cors"

dotenv.config();
const app = express();  
app.use(cors());

app.use("/api/scrape", appRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server run in port ${PORT}`));