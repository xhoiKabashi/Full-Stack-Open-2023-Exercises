import axios from "axios";

const baseurl = "http://localhost:3001/api/persons";

const getAll = () => {
  return axios.get(baseurl);
};

const create = (data) => {
  return axios.post(baseurl, data);
};

// apiService.js

const deletePerson = (id) => {
  return axios.delete(`${baseurl}/${id}`);
};

const update = (id, data) => {
  return axios.put(`${baseurl}/${id}`, data);
};

export default { getAll, create, update, deletePerson };
