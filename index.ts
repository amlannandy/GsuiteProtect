import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import express, { Request, Response } from "express";

import connectDatabase from "services/database";
import errorHandler from "middleware/errorHandler";

// Load environment variables
dotenv.config({ path: "./.env" });

const app = express();

// Body parser
app.use(express.json());

// Import route files
import auth from "routes/auth";
import backups from "routes/backups";

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Connect to database
connectDatabase();

// Enable CORS
app.use(cors());

// Mount routes
app.use("/api/v1/auth", auth);
app.use("/api/v1/backups", backups);

//Error handling middleware
app.use(errorHandler);

// Handle 404 cases
app.use("*", (_: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    errors: ["This route does not exist"],
  });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`.bgBlue);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err: Error) => {
  console.log(colors.red.underline(`Error: ${err.message}`));
  //Close server and exit process
  server.close(() => process.exit(1));
});
