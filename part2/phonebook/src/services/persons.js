import axios from 'axios';

const url = 'http://localhost:3001/persons';

export const getAll = () => axios.get(url).then(response => response.data);

export const create = newPerson => axios.post(url, newPerson).then(response => response.data);

export const update = (id, newPerson) => axios.put(`${url}/${id}`, newPerson).then(response => response.data);

export const remove = (id) => axios.delete(`${url}/${id}`);