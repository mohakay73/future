import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import logger from './middleware/logger.mjs';
import errorHandler from './middleware/errorHandler.mjs';
import path from 'path';
import blockchainRouter from './routes/blockchain-routes.mjs';

import ErrorResponse from './utilities/errorResponseModel.mjs';
// import blockchainRouter from "./routes/blockchain-routes.mjs";
import transactionRouter from './routes/transaction-routes.mjs';
// import memberRouter from "./routes/member-routes.mjs";

import { fileURLToPath } from 'url';

dotenv.config({ path: './config/config.env' });

const PORT = process.argv[2] || process.env.PORT || 5001;

const app = express();
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

global.__appdir = dirname;

// Middleware...
app.use(cors());
app.use(express.json());
app.use('/api/v1/blockchain', blockchainRouter);
app.use('/api/v1/transactions', transactionRouter);
// app.use("/api/v1/members", memberRouter);

if (process.env.NODE_ENV === 'development') {
  app.use(logger);
}

// Catch all url...
app.all('*', (req, res, next) => {
  next(new ErrorResponse(`Kunde inte hitta resursen ${req.originalUrl}`, 404));
});

// Central felhantering...
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
