import React, { useEffect, useRef } from 'react'
import SecuritySidebar from './SecuritySidebar'
import Simulation from '../../components/Simulation'
function SimulationSecurity
 () {

  return (
    <>
      <div className='table-container'>
        <SecuritySidebar />
        <div className='table-wrapper'>
          <div className='map-container'>
           <Simulation />
          </div>
        </div>
      </div>
    </>
  )
}
export default SimulationSecurity

