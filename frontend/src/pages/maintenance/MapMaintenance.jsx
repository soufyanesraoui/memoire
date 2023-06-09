import React from 'react'
import Map from '../../components/Map'
import MaintenanceSidebar from './MaintenanceSidebar';
import '../admin/admin-table.css'

function MapMaintenance() {
  return (
    <div>
      <div className="table-container">
            <MaintenanceSidebar />
            <div className="table-wrapper">
            <Map />
            </div>
      </div>
    </div>
  )
}

export default MapMaintenance
