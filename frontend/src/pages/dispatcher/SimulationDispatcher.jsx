import React, { useEffect, useRef } from 'react'
import DispatcherSidebar from './DispatcherSidebar'
import Simulation from '../../components/Simulation'
function SimulationDispatcher
 () {

  return (
    <>
      <div className='table-container'>
        <DispatcherSidebar />
        <div className='table-wrapper'>
          <div className='map-container'>
           <Simulation />
          </div>
        </div>
      </div>
    </>
  )
}
export default SimulationDispatcher

