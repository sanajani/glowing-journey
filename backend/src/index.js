import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import dbConnection from './services/database_servecies/databaseConnection.js';
import helmet from 'helmet';

// routes
import userRoutes from './routes/UserRoute.js'
import propertyRouter from './routes/PropertyRoutes.js';

// custom errors
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
const port = process.env.PORT || 4940;
app.use(express.json());
app.use(helmet());

// /api/v1/users
app.use("/api/v1/", userRoutes)

// property houses
app.use("/api/v1/", propertyRouter)

// error handler
app.use(errorHandler)

app.listen(port,() => {
    console.log(`server is running on http://localhost:${port}`);
    dbConnection();
})