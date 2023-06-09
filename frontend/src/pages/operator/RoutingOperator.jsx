import React from 'react'
import Routing from '../../components/Routing'
import OperatorSidebar from './OperatorSidebar';
import '../admin/admin-table.css'

function RoutingOperator() {
  return (
    <div>
       <div>
      <div className="table-container">
            <OperatorSidebar />
            <div className="table-wrapper">
            <Routing />
            </div>
      </div>
    </div>
    </div>
  )
}

export default RoutingOperator
