import axios from 'axios'
const baseURL = 'http://localhost:3002/api/users'

const getUser = async ({ nick, passw }) => {
  const { data } = await axios.get(`${baseURL}/${nick}/${passw}`)
  return data
}

export { getUser }
