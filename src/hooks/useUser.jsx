import { useState } from 'react'

export default function useUser () {
  const userStorage = window.sessionStorage.getItem('userLog')
  const [user] = useState(userStorage || null)

  return { isLogged: Boolean(user) }
}
