import React from 'react'
import Routing from '../../components/Routing'
import DispatcherSidebar from './DispatcherSidebar';
import '../admin/admin-table.css'

function RoutingDispatcher() {
  return (
    <div>
       <div>
      <div className="table-container">
            <DispatcherSidebar />
            <div className="table-wrapper">
            <Routing />
            </div>
      </div>
    </div>
    </div>
  )
}

export default RoutingDispatcher
