import axios from 'axios';

const url = 'https://localhost:8000/api';

export const fetchPaintings = () => axios.get(url);
export const createPainting = (newPainting) => axios.post(url, newPainting);
export const updatePainting = (id, updatedPainting) => axios.put(`${url}/${id}`, updatedPainting);
export const deletePainting = (id) => axios.delete(`${url}/${id}`);