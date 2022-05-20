import axios from 'axios'
const baseURL = 'http://localhost:3002/api/canciones'

const obtainAll = async () => {
  const { data } = await axios.get(`${baseURL}`)
  return data
}

export { obtainAll }
