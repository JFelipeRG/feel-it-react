import { useCallback, useContext, useState } from 'react'
import Context from '@context/UserContext'
import { login } from '@services/user.services'

export default function useUser () {
  const { user, setUser } = useContext(Context)
  const [error, setError] = useState(false)

  const loginUser = useCallback(({ nick, passw }) => {
    login({ nick, passw })
      .then(user => {
        window.sessionStorage.setItem('user', JSON.stringify(user))
        setError(true)
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

  return { user, isLogged: Boolean(user), loginUser, logout, error }
}
