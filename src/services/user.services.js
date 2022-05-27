import axios from 'axios'
const baseURL = 'http://localhost:3002/api/user'

const login = async params => {
  const { data } = await axios.post(`${baseURL}/login`, params)
  return data
}

const register = async params => {
  const { data } = await axios.post(`${baseURL}/register`, params,
    { headers: { 'Content-Type': 'multipart/form-data' } })
  return data
}

const update = async params => {
  const { data } = await axios.post(`${baseURL}/update`, params,
    { headers: { 'Content-Type': 'multipart/form-data' } })
  return data
}

const updatedUser = async params => {
  const { data } = await axios.post(`${baseURL}/updatedUser`, params)
  return data
}

const search = async params => {
  const { data } = await axios.post(`${baseURL}/search`, params)
  return data
}

export { login, register, search, update, updatedUser }
