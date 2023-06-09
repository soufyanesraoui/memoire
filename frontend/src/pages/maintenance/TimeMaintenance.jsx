import React from 'react'
import TimingTramway from '../../components/TimingTramway'
import '../admin/admin-table.css'
import MaintenanceSidebar from './MaintenanceSidebar'
function TimeMaintenance() {
  return (
    <div>
       <div className='table-container'>
        <MaintenanceSidebar />
        <div className='table-wrapper'>
            <TimingTramway />
        </div>
    </div></div>
  )
}

export default TimeMaintenance
