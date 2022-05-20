import axios from 'axios'
const baseURL = 'http://localhost:3002/api/posts'

const create = async params => {
  const { data } = await axios.post(`${baseURL}/create`, params)
  return data
}

const obtainAll = async () => {
  const { data } = await axios.get(`${baseURL}`)
  return data
}

export { create, obtainAll }
