import React, { useEffect, useRef } from 'react'
import MaintenanceSidebar from './MaintenanceSidebar'
import Simulation from '../../components/Simulation'
function SimulationMaintenance
 () {

  return (
    <>
      <div className='table-container'>
        <MaintenanceSidebar />
        <div className='table-wrapper'>
          <div className='map-container'>
           <Simulation />
          </div>
        </div>
      </div>
    </>
  )
}
export default SimulationMaintenance

