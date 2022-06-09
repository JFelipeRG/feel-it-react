import axios from 'axios'
const baseURL = 'https://peaceful-brook-00691.herokuapp.com/posts'

const create = async params => {
  const { data } = await axios.post(`${baseURL}/create`, params)
  return data
}

const obtainAll = async () => {
  const { data } = await axios.get(`${baseURL}`)
  return data
}

const remove = async params => {
  const { data } = await axios.post(`${baseURL}/delete`, params)

  return data
}

export { create, obtainAll, remove }
