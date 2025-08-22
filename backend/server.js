import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import authRoutes from './routes/routes.js';
import cors from 'cors';



dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/users', authRoutes);


connectDB();

app.listen(3000, () =>{
    console.log('Server is running properly');

});