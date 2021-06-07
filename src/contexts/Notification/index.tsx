import React, { createContext, useState } from 'react'
import { INotificationProps } from './INotificationProps'

export const NotificationContext = createContext( {} as INotificationProps )

function NotificationProvider({ children }: any) {

  const [ShowMessage, setShowMessage] = useState(false)
  const [Message, setMessage] = useState()
  const [Icon, setIcon] = useState()

  return (
    <NotificationContext.Provider value={{ ShowMessage, setShowMessage, Message, setMessage, Icon, setIcon }}>
      { children }
    </NotificationContext.Provider>
  )
}

export default NotificationProvider
