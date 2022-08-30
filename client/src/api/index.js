import axios from 'axios';

const url = 'http://localhost:8000/movements';

export const fetchMovements = () => axios.get(url);
export const createMovement = (newMove) => axios.post(url, newMove);
export const updateMovement = (id, updatedMovement) => axios.patch(`${url}/${id}`, updatedMovement);
export const deleteMovement = (id) => axios.delete(`${url}/${id}`);