import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import Connection from './database/db.js';
import Router from './routes/route.js';

const PORT = process.env.PORT || 3000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use('/', Router);

// Database connection
Connection(username, password);

app.listen(PORT, () => console.log(`Running on PORT ${PORT}`));