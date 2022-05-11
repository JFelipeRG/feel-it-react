import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useNav ({ path }) {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(path)
  }, [])
}
