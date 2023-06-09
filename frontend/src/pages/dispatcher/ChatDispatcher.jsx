import React from 'react'
import ChatComponent from '../../components/ChatComponent'
import DispatcherSidebar from './DispatcherSidebar';
import '../admin/admin-table.css'

function ChatDispatcher() {
  return (
    <div>
      <div className="table-container">
            <DispatcherSidebar />
            <div className="table-wrapper">
            <ChatComponent />
            </div>
      </div>
    </div>
  )
}

export default ChatDispatcher
