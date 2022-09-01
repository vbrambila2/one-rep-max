import axios from 'axios';

const url = 'https://one-rep-max.herokuapp.com/movements';

export const fetchMovements = () => axios.get(url);
export const createMovement = (newMove) => axios.post(url, newMove);
export const updateMovement = (id, updatedMovement) => axios.patch(`${url}/${id}`, updatedMovement);
export const deleteMovement = (id) => axios.delete(`${url}/${id}`);