import 'axios'
import Axios from 'axios';

const base_url = 'http://localhost:5000'
const users_route = 'users'

export const create_user = async (user_data) => {
  return await Axios.post(`${base_url}/${users_route}`, user_data)
}

export const get_user = async (user_id) => {
  return await Axios.get(`${base_url}/${users_route}/${user_id}`)
}

export const delete_user = async (user_data) => {
  return await Axios.delete(`${base_url}/${users_route}/${user_id}`)
}