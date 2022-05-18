import { useCallback, useContext, useState } from 'react'
import Context from '@context/UserContext'
import { login, register } from '@services/user.services'
import { useNavigate } from 'react-router-dom'

export default function useUser () {
  const navigate = useNavigate()
  const { user, setUser } = useContext(Context)
  const [error, setError] = useState(false)

  const loginUser = useCallback(({ nick, passw }) => {
    login({ nick, passw })
      .then(user => {
        window.sessionStorage.setItem('user', JSON.stringify(user))
        setError(false)
        setUser(user)
      }).catch(err => {
        window.sessionStorage.removeItem('user')
        setError(true)
        console.log(err.message)
      })
  }, [setUser])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('user')
    setUser(null)
  }, [setUser])

  const registerUser = useCallback(({ name, nick, passw, profileimg }) => {
    register({ name, nick, passw, profileimg })
      .then(() => {
        setError(false)
        navigate('/login')
      }).catch(err => {
        setError(true)
        console.log(err)
      })
  }, [])

  return { user, isLogged: Boolean(user), loginUser, logout, registerUser, error }
}
