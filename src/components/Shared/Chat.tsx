import { ReactNode } from 'react'

const Chat = ({ children }: { children: ReactNode }) => {
  return <div className="chat">{children}</div>
}

export default Chat
