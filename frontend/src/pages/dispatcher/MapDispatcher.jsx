import React from 'react'
import Map from '../../components/Map'
import DispatcherSidebar from './DispatcherSidebar';
import '../admin/admin-table.css'

function MapDispatcher() {
  return (
    <div>
      <div className="table-container">
            <DispatcherSidebar />
            <div className="table-wrapper">
            <Map />
            </div>
      </div>
    </div>
  )
}

export default MapDispatcher
