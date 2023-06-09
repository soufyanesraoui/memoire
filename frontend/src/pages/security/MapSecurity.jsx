import React from 'react'
import Map from '../../components/Map'
import SecuritySidebar from './SecuritySidebar';
import '../admin/admin-table.css'

function MapSecurity() {
  return (
    <div>
      <div className="table-container">
            <SecuritySidebar />
            <div className="table-wrapper">
            <Map />
            </div>
      </div>
    </div>
  )
}

export default MapSecurity
