import { useNavigate } from 'react-router-dom'
import useUser from '@hooks/useUser'
import { useEffect } from 'react'

export default function useNav () {
  const navigate = useNavigate()
  const { isLogged } = useUser()

  useEffect(() => {
    if (isLogged) navigate('/home')
    else navigate('/login')
  }, [isLogged])
}
