import React from 'react'
import ChatComponent from '../../components/ChatComponent'
import MaintenanceSidebar from './MaintenanceSidebar';
import '../admin/admin-table.css'

function ChatMaintenance() {
  return (
    <div>
      <div className="table-container">
            <MaintenanceSidebar />
            <div className="table-wrapper">
            <ChatComponent />
            </div>
      </div>
    </div>
  )
}

export default ChatMaintenance
