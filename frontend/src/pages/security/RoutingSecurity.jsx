import React from 'react'
import Routing from '../../components/Routing'
import SecuritySidebar from './SecuritySidebar';
import '../admin/admin-table.css'

function RoutingSecurity() {
  return (
    <div>
       <div>
      <div className="table-container">
            <SecuritySidebar />
            <div className="table-wrapper">
            <Routing />
            </div>
      </div>
    </div>
    </div>
  )
}

export default RoutingSecurity
