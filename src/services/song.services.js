import axios from 'axios'
const baseURL = 'http://localhost:3002/api/canciones'

const searchSong = async params => {
  const { data } = await axios.post(`${baseURL}/search`, params)
  return data
}

const hotest = async () => {
  const { data } = await axios.get(`${baseURL}/hot`)

  return data
}

const recent = async () => {
  const { data } = await axios.get(`${baseURL}/recent`)

  return data
}

export { searchSong, hotest, recent }
