import { useEffect, useState } from 'react'
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

  return { user, isLoading }
}
