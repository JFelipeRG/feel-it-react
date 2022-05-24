import React, { useState } from 'react'

const Context = React.createContext({})

export function UserContextProvider ({ children }) {
  const [user, setUser] = useState(
    () => JSON.parse(window.localStorage.getItem('user'))
  )

  return (
    <Context.Provider value={{ user, setUser }}>
      {children}
    </Context.Provider>
  )
}

export default Context
