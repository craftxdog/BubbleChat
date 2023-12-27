import { useCallback, useState } from 'react'

export interface Message {
  id: number
  text: string
  height: number
}

const useMessages = (initialValue: Array<Message> = []) => {
  const [message, setMessage] = useState(initialValue)
  const addMessage = useCallback(
    (msg: Message) => {
      setMessage(message => [...message, msg])
      setTimeout(() => {
        setMessage(current => {
          const n = [...current]
          n.shift()
          return n
        })
      }, 10000)
    },
    [setMessage]
  )
  return [message, addMessage] as const
}

export default useMessages
