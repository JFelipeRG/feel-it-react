import axios from 'axios'
const baseURL = 'http://localhost:3002/api/user'

const login = async params => {
  const { data } = await axios.post(`${baseURL}/login`, params)
  return data
}

const register = async params => {
  const { data } = await axios.post(`${baseURL}/register`, params)
  return data
}

export { login, register }
