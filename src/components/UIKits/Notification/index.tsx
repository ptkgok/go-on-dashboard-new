import React, { useContext } from 'react'
import { NotificationContext } from '../../../infra/providers/notification'
import { Container } from './Styles'

function Notification({
  message,
  children,
  time = 5000
}: any) {

  const { ShowMessage, setShowMessage } = useContext(NotificationContext)

  if(ShowMessage) {
    setTimeout(()=>{
      setShowMessage(false)
    },time)
  }

  return (
    <Container>
      {children} {message}
    </Container>
  )
}

export default Notification
