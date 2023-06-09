import React from 'react'
import ChatComponent from '../../components/ChatComponent'
import SecuritySidebar from './SecuritySidebar';
import '../admin/admin-table.css'

function ChatSecurity() {
  return (
    <div>
      <div className="table-container">
            <SecuritySidebar />
            <div className="table-wrapper">
            <ChatComponent />
            </div>
      </div>
    </div>
  )
}

export default ChatSecurity
