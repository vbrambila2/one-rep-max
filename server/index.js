import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import movementRoutes from './routes/movements.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/movements', movementRoutes);

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Your one rep maxes, together');
});

mongoose.connect( process.env.CONNECTION_URL )
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));