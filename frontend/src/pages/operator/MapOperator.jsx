import React from 'react'
import Map from '../../components/Map'
import OperatorSidebar from './OperatorSidebar';
import '../admin/admin-table.css'

function MapOperator() {
  return (
    <div>
      <div className="table-container">
            <OperatorSidebar />
            <div className="table-wrapper">
            <Map />
            </div>
      </div>
    </div>
  )
}

export default MapOperator
