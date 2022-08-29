import mongoose from 'mongoose';
import { moveForm } from '../models/moveForm.js';

export const fetchMovements = async (req,res) => {
    try {
        const postMovement = await moveForm.find();

        res.status(200).json(postMovement);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
};

export const createMovement = async (req,res) => {
    const move = req.body;

    const newMove = new moveForm(move);
    try {
        await newMove.save();

        res.status(201).json(newMove);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateMovement = async (req,res) => {
    const { id: _id } = req.params;
    const move = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No movement with that ID');

    const updatedMovement = await moveForm.findByIdAndUpdate(_id, { ...move, _id }, { new: true });

    res.json(updatedMovement)
};

export const deleteMovement = async (req,res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No movement with that ID');

    const deletedMovement = await moveForm.findByIdAndRemove(id);

    res.json(deletedMovement);
};