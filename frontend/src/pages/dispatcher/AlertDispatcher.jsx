import React, { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import 'leaflet-draw'
import 'leaflet-control-geocoder'
import 'leaflet-geosearch/dist/geosearch.css'
import DispatcherSidebar from './DispatcherSidebar'
import Alert from '../../components/Alert'
function AlertDispatcher
 () {

  return (
    <>
      <div className='table-container'>
        <DispatcherSidebar />
        <div className='table-wrapper'>
          <div className='map-container'>
           <Alert />
          </div>
        </div>
      </div>
    </>
  )
}
export default AlertDispatcher

