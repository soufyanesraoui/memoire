import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet'
import L from 'leaflet'
import carIcon from './tram.png'
import './RealTimeRouting.css'
import Sidebar from './Sidebar'
import Location from './Location'

const routeCoordinates = [
  [36.37114992066686, 6.605441896824446],
  [36.36152402701944, 6.606813784175824],
  [36.35103241937027, 6.601014106719133],
  [36.34761487194633, 6.600836246359245],
  [36.349983019712404, 6.60577133672817],
  [36.347802493652786, 6.610571668690413],
  [36.34110915229988, 6.617641891527552],
  [36.33441986974847, 6.616633380960815],
  [36.32463402723719, 6.620925639254889],
  [36.31357289323075, 6.617846347957507],
  [36.284731270839664, 6.597188113109438],
  [36.27358366383604, 6.592919553120408],
  [36.26561808425965, 6.596641437776008],
  [36.26192225513662, 6.601801435251116],
  [36.25923888085393, 6.595190001156681],
  [36.25529476335167, 6.575178581955405],
  [36.24983902462529, 6.573969340362287],
  [36.24940688084546, 6.573829933820976],
  [36.247866760281845, 6.569356009209052]
]
const customIcon = L.icon({
  iconUrl: carIcon,
  iconSize: [32, 32]
})
function Vehicle ({ position }) {
  return <Marker position={position} icon={customIcon} />
}

function App () {
  const [vehicles, setVehicles] = useState([])
  const [breakStatus, setBreakStatus] = useState({})

  useEffect(() => {
    // Set initial vehicle positions and speeds
    const initialVehicles = [
      { id: 1, positionIndex: 0, speed: 0.00005 },
      { id: 2, positionIndex: 1, speed: 0.0001 },
      { id: 3, positionIndex: 2, speed: 0.00015 }
    ]

    setVehicles(initialVehicles)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles(prevVehicles =>
        prevVehicles.map(vehicle => {
          if (breakStatus[vehicle.id]) {
            return vehicle // Vehicle is broken, so don't update its position
          }

          const newPositionIndex =
            (vehicle.positionIndex + 1) % routeCoordinates.length
          return {
            ...vehicle,
            positionIndex: newPositionIndex
          }
        })
      )
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [breakStatus])

  const handleSpeedChange = (vehicleId, newSpeed) => {
    setVehicles(prevVehicles =>
      prevVehicles.map(vehicle =>
        vehicle.id === vehicleId ? { ...vehicle, speed: newSpeed } : vehicle
      )
    )
  }

  const handleBreakToggle = vehicleId => {
    setBreakStatus(prevBreakStatus => ({
      ...prevBreakStatus,
      [vehicleId]: !prevBreakStatus[vehicleId] // Toggle the break status of the vehicle
    }))
  }

  return (
    <>
      <div className='table-container'>
        <Sidebar />
        <div className='table-wrapper'>
          <MapContainer
            center={routeCoordinates[0]}
            zoom={12}
            style={{ height: '500px', width: '100%' }}
          >
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

            <Location />
            <Polyline positions={routeCoordinates} color='blue' />

            {vehicles.map(vehicle => {
              const position = routeCoordinates[vehicle.positionIndex]
              return <Vehicle key={vehicle.id} position={position} />
            })}
          </MapContainer>
          <div className='child'>
            {vehicles.map(vehicle => (
              <div className='tramway-style' key={vehicle.id}>
                <h4>Tramway{vehicle.id} </h4> <br />
                <button
                  className='button-real-time'
                  onClick={() =>
                    handleSpeedChange(vehicle.id, vehicle.speed + 0.0001)
                  }
                >
                  Increase
                </button>
                <button
                  className='button-real-time'
                  onClick={() =>
                    handleSpeedChange(vehicle.id, vehicle.speed - 0.0001)
                  }
                >
                  Decrease
                </button>
                <button
                  className='button-real-time'
                  onClick={() => handleBreakToggle(vehicle.id)}
                >
                  {breakStatus[vehicle.id] ? 'Fix' : 'Break'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
