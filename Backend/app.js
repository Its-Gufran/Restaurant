import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js"
import {errorMiddleware} from "./error/error.js"
const app = express();
dotenv.config({ path: "./config/config.env" });

//To connect backend to frontend
app.use(
  cors({
    //Path of frontend which is to be connected to backend
    origin: [process.env.FRONTEND_URL],

    //We will be using POST method only
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json()); //It parses the incoming request body, which typically contains data in JSON format, and makes that data available in the request.body property as a JSON object.
app.use(express.urlencoded({ extended: true }));//In an Express application, when you receive data from a user (like a form submission), it often comes in different formats. The app.use(express.urlencoded({ extended: true })) is like a helper that helps the server understand and work with data that comes in a specific format.

dbConnection();

//For error handling
app.use(errorMiddleware)

export default app;
