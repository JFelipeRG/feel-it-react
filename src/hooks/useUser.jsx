import { useCallback, useContext } from 'react'
import Context from '@context/UserContext'

export default function useUser () {
  const { user, setUser } = useContext(Context)

  const login = useCallback((username, passw) => {
    window.sessionStorage.setItem('user', [username, passw])
    setUser([username, passw])
  }, [setUser])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('user')
    setUser(null)
  }, [setUser])

  return { isLogged: Boolean(user), login, logout }
}
