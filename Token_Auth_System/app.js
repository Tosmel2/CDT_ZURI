// app.js
import express from 'express';
import mongoose from 'mongoose';
import auth from './routes/auth.js';
import cors from "cors";
import bodyParser from 'body-parser';
import dotenv from "dotenv";

import { dbConnect } from './config/dbConnect.js';

dotenv.config();
dbConnect();

const app = express();

app.use(express.json());

app.use(cors({ origin: '*' }))

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/auth', auth);


// //routes
// app.use("/api/v1/users", userRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
