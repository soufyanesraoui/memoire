import React from 'react'
import Routing from '../../components/Routing'
import MaintenanceSidebar from './MaintenanceSidebar';
import '../admin/admin-table.css'

function RoutingMaintenance() {
  return (
    <div>
       <div>
      <div className="table-container">
            <MaintenanceSidebar />
            <div className="table-wrapper">
            <Routing />
            </div>
      </div>
    </div>
    </div>
  )
}

export default RoutingMaintenance
