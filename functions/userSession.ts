import { UserType } from './../types/types'
import { decryptItem, encryptItem } from './encryption'
import { SESSION_KEY, SESSION_NAME } from './environmentVariables'

export const getUserSession = () => {
  if (typeof window === 'undefined') {
    return null
  }

  let sessionDetails = window.localStorage.getItem(SESSION_NAME!)
  if (sessionDetails) {
    sessionDetails = decryptItem(sessionDetails, SESSION_KEY!)
    sessionDetails = JSON.parse(sessionDetails as string)
  }

  return sessionDetails as UserType | null
}

export const storeSessionDetails = (sessionDetails: UserType) => {
  if (typeof window === 'undefined') {
    return false
  }

  const encryptedSession = encryptItem(sessionDetails, SESSION_KEY!)
  localStorage.setItem(SESSION_NAME!, encryptedSession)
  return true
}

export const removeSessionDetails = () => {
  if (typeof window === 'undefined') {
    return false
  }

  localStorage.removeItem(SESSION_NAME!)
  return true
}
