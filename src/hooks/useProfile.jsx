import { useEffect, useState, useCallback } from 'react'
import { search } from '@services/user.services'

export default function useProfile ({ nick }) {
  const [user, setUser] = useState()
  const [isLoading, setIsLoanding] = useState(false)

  useEffect(() => {
    setIsLoanding(true)
    search({ nick })
      .then(user => {
        setUser(user)
        setIsLoanding(false)
      }).catch(err => {
        console.log(err)
      })
  }, [nick])

  const updateUser = useCallback(({ nick }) => {
    search({ nick })
      .then(user => {
        setUser(user)
        setIsLoanding(false)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return { user, isLoading, updateUser }
}
