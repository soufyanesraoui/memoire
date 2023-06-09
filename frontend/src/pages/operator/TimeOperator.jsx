import React from 'react'
import TimingTramway from '../../components/TimingTramway'
import '../admin/admin-table.css'
import OperatorSidebar from './OperatorSidebar'
function TimeOperator() {
  return (
    <div>
       <div className='table-container'>
        <OperatorSidebar />
        <div className='table-wrapper'>
            <TimingTramway />
        </div>
    </div></div>
  )
}

export default TimeOperator
