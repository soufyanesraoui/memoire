import React from 'react'
import ChatComponent from '../../components/ChatComponent'
import OperatorSidebar from './OperatorSidebar';
import '../admin/admin-table.css'

function ChatOperator() {
  return (
    <div>
      <div className="table-container">
            <OperatorSidebar />
            <div className="table-wrapper">
            <ChatComponent />
            </div>
      </div>
    </div>
  )
}

export default ChatOperator
