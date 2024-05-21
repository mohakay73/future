import "./setGlobalAppDir.mjs"; 
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import logger from "./middleware/logger.mjs";
import errorHandler from "./middleware/errorHandler.mjs";
import path from "path";

import ErrorResponse from "./utilities/errorResponseModel.mjs";
import blockchainRouter from "./routes/blockchain-routes.mjs";
import transactionRouter from "./routes/transaction-routes.mjs";
import memberRouter from "./routes/member-routes.mjs";
import { ensureDirectoryExists } from "./utilities/filehandler.mjs";

dotenv.config({ path: './config/config.env' });

const PORT = process.argv[2] || process.env.PORT || 5001;

const app = express();

// Ensure logs directory exists
ensureDirectoryExists(path.join(global.__appdir, 'logs'));

// Middleware...
app.use(cors());
app.use(express.json());
app.use("/api/v1/blockchain", blockchainRouter);
app.use("/api/v1/transactions", transactionRouter);
app.use("/api/v1/members", memberRouter);

if (process.env.NODE_ENV === "development") {
  app.use(logger);
}

// app.use('/api/v1/products', productsRouter);
// app.use('/api/v1/customers', customersRouter);

// Catch all url...
app.all("*", (req, res, next) => {
  next(new ErrorResponse(`Kunde inte hitta resursen ${req.originalUrl}`, 404));
});

// Central felhantering...
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));