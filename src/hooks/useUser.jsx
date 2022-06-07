import { useCallback, useContext, useState } from 'react'
import Context from '@context/UserContext'
import { login, register, search, update, updatedUser, removeImg, changePassword } from '@services/user.services'
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
        console.log(err)
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
        navigate('/i/logIn')
      }).catch(err => {
        setError(true)
        console.log(err)
      })
  }, [])

  const updateUser = useCallback(({ name, nick, profileimg, onClose }) => {
    if (user.nick === nick) {
      updateFunction({ name, nick, profileimg, onClose })
    } else {
      search({ nick })
        .then(user => {
          if (user) {
            setError(true)
          } else {
            updateFunction({ name, nick, profileimg, onClose })
          }
        })
    }
  }, [])

  const updateFunction = useCallback(({ name, nick, profileimg, onClose }) => {
    const actualImage = user.profile_img
    const id = user.id

    update({ id, name, nick, actualImage, profileimg })
      .then(() => {
        updatedUser({ id })
          .then(updatedUser => {
            window.localStorage.setItem('user', JSON.stringify(updatedUser))
            setUser(updatedUser)
            setError(false)
            onClose()
            if (user.nick !== updatedUser.nick) navigate(`/profile/${updatedUser.nick}`)
          })
      })
  }, [])

  const deleteImg = useCallback(() => {
    const id = user.id
    const actualImage = user.profile_img

    removeImg({ id, actualImage })
      .then(() => {
        updatedUser({ id })
          .then(updatedUser => {
            window.localStorage.setItem('user', JSON.stringify(updatedUser))
            setUser(updatedUser)
            setError(false)
          })
      })
  }, [])

  const newPassw = useCallback(({ passw, actualPassw, setSuccessful, formRef }) => {
    const id = user.id

    console.log({ passw, actualPassw })
    changePassword({ id, actualPassw, passw })
      .then(() => {
        updatedUser({ id })
          .then(updatedUser => {
            console.log(updatedUser)
            window.localStorage.setItem('user', JSON.stringify(updatedUser))
            setUser(updatedUser)
            setError(false)
            setSuccessful(true)
            formRef.current.reset()
          })
      })
      .catch(() => {
        setError(true)
        setSuccessful(false)
      })
  }, [])

  return {
    user,
    isLogged: Boolean(user),
    loginUser,
    logout,
    registerUser,
    updateUser,
    deleteImg,
    newPassw,
    error
  }
}
