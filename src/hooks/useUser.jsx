import { useCallback, useContext, useState } from 'react'
import Context from '@context/UserContext'
import { login } from '@services/user.services'

export default function useUser () {
  const { user, setUser } = useContext(Context)
  const [error, setError] = useState({ state: false, message: '' })

  const loginUser = useCallback(({ nick, passw }) => {
    login({ nick, passw })
      .then(user => {
        if (user.length === 0) throw new Error()

        window.sessionStorage.setItem('user', JSON.stringify(user))
        setError({ state: false, message: '' })
        setUser(user)
      }).catch(err => {
        window.sessionStorage.removeItem('user')
        setError({ state: true, message: 'El usuario o la contraseña no son válidos' })
        console.log(err.message)
      })
  }, [setUser])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('user')
    setUser(null)
  }, [setUser])

  return { user, isLogged: Boolean(user), loginUser, logout, error }
}
