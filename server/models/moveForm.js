import mongoose from 'mongoose';

const movementSchema = mongoose.Schema({
    movementName: String,
    movementWeight: String,
});

export const moveForm = mongoose.model('moveForm', movementSchema);