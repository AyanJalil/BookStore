import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js'
import userroute from './route/user.route.js';
import cors from 'cors';

const App = express();
dotenv.config();


App.use(cors({
    "origins":"*"
}));
App.use(express.json());

const PORT = process.env.PORT || 4000;
const MongoDBURI = process.env.MongoDBURI;

//Connect to MongoDb
try {
    mongoose.connect(MongoDBURI, {
        useNewUrlParser : true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MongoDb");
    
} catch (error) {
    console.log(error);
}

// defining route
App.use('/book', bookRoute);
App.use('/user', userroute)

App.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})