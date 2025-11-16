import express from 'express';
import dbConnection from './services/databaseConnection.js';

// routes
import userRoutes from './routes/UserRoute.js'
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
const port = process.env.PORT || 4940;
app.use(express.json())

// /api/v1/users
app.use("/api/v1/", userRoutes)

// error handler
app.use(errorHandler)

app.listen(port,() => {
    console.log(`server is running on http://localhost:${port}`);
    dbConnection();
})