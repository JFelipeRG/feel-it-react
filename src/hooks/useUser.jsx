import { useCallback, useContext, useState } from 'react'
import Context from '@context/UserContext'
import { getUser } from '@services/user.services'

export default function useUser () {
  const { user, setUser } = useContext(Context)
  const [error, setError] = useState(false)

  const login = useCallback(({ nick, passw }) => {
    getUser({ nick, passw })
      .then(user => {
        if (user.length === 0) throw new Error('Usuario no valido')

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

  return { isLogged: Boolean(user), login, logout, error }
}
