import axios from 'axios'
const baseURL = 'https://peaceful-brook-00691.herokuapp.com/user'

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

const removeImg = async params => {
  const { data } = await axios.post(`${baseURL}/removeImg`, params)
  return data
}

const changePassword = async params => {
  const { data } = await axios.post(`${baseURL}/changePassw`, params)
  return data
}

export { login, register, search, update, updatedUser, removeImg, changePassword }
