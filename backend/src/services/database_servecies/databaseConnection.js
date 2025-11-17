import mongoose from "mongoose";


const dbURL = process.env.MONGODBURL || 'mongodb://localhost:27017/mydb'
const dbConnection = async () => {
    try {
        const conn = await mongoose.connect(dbURL)
        console.log("Mongodb connected");

        mongoose.connection.on("error", (err) => {
            console.log('mongodb connection error', err);
        })

        mongoose.connection.on("disconnected", () => {
            console.log('mongo db disconnected');
        })

        mongoose.connection.on("reconnected", ()=> {
            console.log('reconnected mongo');
        })

        process.on('SIGINT', async () => {
            await mongoose.connection.close();
            console.log('mongo db connection closed through app');
            process.exit(0);
        })
        
    } catch (error) {
     console.log(error);
     process.exit(1);    
    }
}


export default dbConnection;
