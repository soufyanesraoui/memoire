import React from 'react'
import TimingTramway from '../../components/TimingTramway'
import '../admin/admin-table.css'
import SecuritySidebar from './SecuritySidebar'
function TimeSecurity() {
  return (
    <div>
       <div className='table-container'>
        <SecuritySidebar />
        <div className='table-wrapper'>
            <TimingTramway />
        </div>
    </div></div>
  )
}

export default TimeSecurity
