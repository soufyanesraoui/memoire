import React from 'react'
import TimingTramway from '../../components/TimingTramway'
import '../admin/admin-table.css'
import DispatcherSidebar from './DispatcherSidebar'
function TimeDispatcher() {
  return (
    <div>
       <div className='table-container'>
        <DispatcherSidebar />
        <div className='table-wrapper'>
            <TimingTramway />
        </div>
    </div></div>
  )
}

export default TimeDispatcher
