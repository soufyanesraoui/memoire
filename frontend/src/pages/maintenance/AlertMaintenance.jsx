import React, { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import 'leaflet-draw'
import 'leaflet-control-geocoder'
import 'leaflet-geosearch/dist/geosearch.css'
import MaintenanceSidebar from './MaintenanceSidebar'
import Alert from '../../components/Alert'
function AlertMaintenance
 () {

  return (
    <>
      <div className='table-container'>
        <MaintenanceSidebar />
        <div className='table-wrapper'>
          <div className='map-container'>
           <Alert />
          </div>
        </div>
      </div>
    </>
  )
}
export default AlertMaintenance

