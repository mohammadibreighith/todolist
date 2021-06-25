/* eslint-disable import/prefer-default-export */
import Axios from 'axios';

const Api = '/todolist';

export async function createTask(description) {
  try {
    const data = await Axios.post(`${Api}`, { description: description });
    return data;
  } catch (err) {
    return err;
  }
}
export async function updateTaskStatus(id) {
  try {
    const data = await Axios.put(`${Api}/${id}`);
    return data;
  } catch (err) {
    return err;
  }
}
export async function deleteTask(id) {
  try {
    const data = await Axios.delete(`${Api}/${id}`);
    return data;
  } catch (err) {
    return err;
  }
}
export async function getTasks() {
  try {
    const data = await Axios.get(`${Api}`);
    return data;
  } catch (err) {
    return err;
  }
}
