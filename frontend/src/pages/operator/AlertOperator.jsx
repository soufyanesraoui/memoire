import React, { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import 'leaflet-draw'
import 'leaflet-control-geocoder'
import 'leaflet-geosearch/dist/geosearch.css'
import OperatorSidebar from './OperatorSidebar'
import Alert from '../../components/Alert'
function AlertOperator
 () {

  return (
    <>
      <div className='table-container'>
        <OperatorSidebar />
        <div className='table-wrapper'>
          <div className='map-container'>
           <Alert />
          </div>
        </div>
      </div>
    </>
  )
}
export default AlertOperator

