import React, { useEffect, useRef } from 'react'
import OperatorSidebar from './OperatorSidebar'
import Simulation from '../../components/Simulation'
function SimulationOperator
 () {

  return (
    <>
      <div className='table-container'>
        <OperatorSidebar />
        <div className='table-wrapper'>
          <div className='map-container'>
           <Simulation />
          </div>
        </div>
      </div>
    </>
  )
}
export default SimulationOperator

