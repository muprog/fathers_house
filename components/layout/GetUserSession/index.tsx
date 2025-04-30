'use client'
import { getUserSession } from '@/functions/userSession'
import { useAppDispatch } from '@/store/hooks'
import { updateUser } from '@/store/slices/user'
import { useEffect } from 'react'

const GetUserSession = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const userSession = getUserSession()
    if (userSession) {
      dispatch(updateUser({ user: userSession }))
    }
  }, [dispatch])

  return null
}

export default GetUserSession
