import express from 'express';
import { fetchMovements, createMovement, updateMovement, deleteMovement } from '../controllers/movements.js';

const router = express.Router();

router.get('/', fetchMovements); 
router.post('/', createMovement); 
// router.patch('/:id', updateMovement);
// router.delete('/:id', deleteMovement);

router.get('/', (req, res) => {
    res.send('works')
});

export default router;