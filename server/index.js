import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import movementRoutes from './routes/movements.js';

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/movements', movementRoutes);

const CONNECTION_URL = 'mongodb+srv://vicbram:Placer11@cluster0.z0e85.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Your one rep maxes, together');
});

mongoose.connect( CONNECTION_URL )
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));