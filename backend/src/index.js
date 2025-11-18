import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import dbConnection from './services/database_servecies/databaseConnection.js';

// routes
import userRoutes from './routes/UserRoute.js'
import { errorHandler } from './middleware/errorHandler.js';
import listingRouter from './routes/ListingRoutes.js';

const app = express();
const port = process.env.PORT || 4940;
app.use(express.json())

// /api/v1/users
app.use("/api/v1/", userRoutes)

// listing houses
app.use("/api/v1/", listingRouter)

// error handler
app.use(errorHandler)

app.listen(port,() => {
    console.log(`server is running on http://localhost:${port}`);
    dbConnection();
})