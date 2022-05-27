import { useCallback, useContext, useState } from 'react'
import Context from '@context/UserContext'
import { login, register, search, update, updatedUser } from '@services/user.services'
import { useNavigate } from 'react-router-dom'

export default function useUser () {
  const navigate = useNavigate()
  const { user, setUser } = useContext(Context)
  const [error, setError] = useState(false)

  const loginUser = useCallback(({ nick, passw }) => {
    login({ nick, passw })
      .then(user => {
        window.localStorage.setItem('user', JSON.stringify(user))
        setError(false)
        setUser(user)
      }).catch(err => {
        window.localStorage.removeItem('user')
        setError(true)
        console.log(err.message)
      })
  }, [setUser])

  const logout = useCallback(() => {
    window.localStorage.removeItem('user')
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

  const updateUser = useCallback(({ id, name, nick, profileimg, onClose }) => {
    console.log(onClose)
    if (user.nick === nick) {
      update({ id, name, nick, profileimg })
        .then(() => {
          updatedUser({ id })
            .then(user => {
              window.localStorage.setItem('user', JSON.stringify(user))
              setUser(user)
              setError(false)
              onClose()
              navigate(`/profile/${user.nick}`)
            })
        })
    } else {
      search({ nick })
        .then(user => {
          if (user) {
            setError(true)
          } else {
            update({ id, name, nick, profileimg })
              .then(() => {
                updatedUser({ id })
                  .then(user => {
                    window.localStorage.setItem('user', JSON.stringify(user))
                    setUser(user)
                    setError(false)
                    onClose()
                    navigate(`/profile/${user.nick}`)
                  })
              })
          }
        })
    }
  }, [])

  return {
    user,
    isLogged: Boolean(user),
    loginUser,
    logout,
    registerUser,
    updateUser,
    error
  }
}
