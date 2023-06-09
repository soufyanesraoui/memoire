import React, { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import L from 'leaflet'
import 'leaflet-draw'
import 'leaflet-control-geocoder'
import 'leaflet-geosearch/dist/geosearch.css'

import customMarkerIcon from './alert2.gif' // Replace with your custom marker icon image
import stationIcon from './station.png' // Replace with the station marker icon image

function AlertDispatcher
 () {
  const mapRef = useRef(null)
  const drawnItemsRef = useRef(null)
  const stationsRef = useRef(null)
  const polylinesRef = useRef(null)

  useEffect(() => {
    const map = L.map(mapRef.current).setView(
      [36.33441986974847, 6.616633380960815],
      13
    )

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors'
    }).addTo(map)

    const drawnItems = new L.FeatureGroup()
    map.addLayer(drawnItems)
    drawnItemsRef.current = drawnItems

    const stations = new L.LayerGroup()
    map.addLayer(stations)
    stationsRef.current = stations

    const polylines = new L.LayerGroup()
    map.addLayer(polylines)
    polylinesRef.current = polylines

    const drawControl = new L.Control.Draw({
      draw: {
        polyline: true,
        polygon: true,
        circle: true,
        circlemarker: true,
        rectangle: true,
        marker: true
      },
      edit: {
        featureGroup: drawnItems,
        remove: true
      }
    })

    map.addControl(drawControl)

    map.on('draw:created', function (e) {
      const layer = e.layer

      if (layer instanceof L.Marker) {
        const shapeCenter = layer.getLatLng()
        const alertMessage = 'Hello, I am a shape with an alert!'

        // Remove any existing markers at the shape's center
        removeMarkersByLatLng(shapeCenter)

        // Create a new marker shape with a custom icon and a popup containing the alert message
        const marker = L.marker(shapeCenter, {
          icon: createCustomIcon()
        }).addTo(map)
        marker.bindPopup(alertMessage).openPopup()
      }

      drawnItems.addLayer(layer)
      saveShapesToLocalStorage()
    })

    const removeMarkersByLatLng = latLng => {
      const markers = drawnItemsRef.current
        .getLayers()
        .filter(layer => layer instanceof L.Marker)
      markers.forEach(marker => {
        if (marker.getLatLng().equals(latLng)) {
          drawnItemsRef.current.removeLayer(marker)
        }
      })
    }

    const createCustomIcon = () => {
      return L.icon({
        iconUrl: customMarkerIcon,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
      })
    }

    const saveShapesToLocalStorage = () => {
      const shapesData = []
      drawnItems.eachLayer(layer => {
        const shapeData = {
          type: layerType(layer),
          coordinates: getLayerCoordinates(layer)
        }
        shapesData.push(shapeData)
      })
      localStorage.setItem('shapes', JSON.stringify(shapesData))
    }

    const layerType = layer => {
      if (layer instanceof L.Marker) {
        return 'marker'
      } else if (layer instanceof L.Polygon) {
        return 'polygon'
      } else if (layer instanceof L.Rectangle) {
        return 'rectangle'
      } else if (layer instanceof L.Circle) {
        return 'circle'
      }
    }

    const getLayerCoordinates = layer => {
      if (layer instanceof L.Marker || layer instanceof L.Circle) {
        return [layer.getLatLng().lat, layer.getLatLng().lng]
      } else if (layer instanceof L.Polygon || layer instanceof L.Rectangle) {
        const latLngs = layer.getLatLngs()[0] // Assuming single polygon or rectangle
        return latLngs.map(latLng => [latLng.lat, latLng.lng])
      }
    }

    const restoreShapesFromLocalStorage = () => {
      const storedShapes = localStorage.getItem('shapes')
      if (storedShapes) {
        const shapesData = JSON.parse(storedShapes)
        shapesData.forEach(shapeData => {
          const layer = createLayerFromShapeData(shapeData)
          drawnItems.addLayer(layer)
        })
      }
    }

    const createLayerFromShapeData = shapeData => {
      let layer
      if (shapeData.type === 'marker') {
        const markerLatLng = L.latLng(shapeData.coordinates)

        // Skip creating a new marker if one already exists at the specified coordinates
        const existingMarker = getMarkerByLatLng(markerLatLng)
        if (existingMarker) {
          return existingMarker
        }

        layer = L.marker(markerLatLng, { icon: createCustomIcon() })
      } else if (shapeData.type === 'polygon') {
        const latLngs = shapeData.coordinates.map(coord => L.latLng(coord))
        layer = L.polygon(latLngs)
      } else if (shapeData.type === 'rectangle') {
        const latLngs = shapeData.coordinates.map(coord => L.latLng(coord))
        layer = L.rectangle(latLngs)
      } else if (shapeData.type === 'circle') {
        const circleLatLng = L.latLng(shapeData.coordinates)
        layer = L.circle(circleLatLng)
      }
      return layer
    }

    const getMarkerByLatLng = latLng => {
      const markers = drawnItemsRef.current
        .getLayers()
        .filter(layer => layer instanceof L.Marker)
      return markers.find(marker => marker.getLatLng().equals(latLng))
    }

    // Restore shapes from local storage on component mount
    restoreShapesFromLocalStorage()

    // Add multiple stations to the map
    addStations([
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
    ])

    // Add polylines connecting the stations
    addPolylines([
      [
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
      ] // Example polyline coordinates
      // Add more polylines coordinates as needed
    ])

    return () => {
      map.remove() // Cleanup the map instance when the component is unmounted
    }
  }, [])

  const removeShapesFromLocalStorage = () => {
    localStorage.removeItem('shapes')
    drawnItemsRef.current.clearLayers()
  }

  const addStations = coordinatesArray => {
    coordinatesArray.forEach(coordinates => {
      const stationMarker = L.marker(coordinates, { icon: createStationIcon() })
      stationsRef.current.addLayer(stationMarker)
    })
  }

  const createStationIcon = () => {
    return L.icon({
      iconUrl: stationIcon,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34]
    })
  }

  const addPolylines = coordinatesArray => {
    coordinatesArray.forEach(coordinates => {
      const polyline = L.polyline(coordinates, { color: 'red' })
      polylinesRef.current.addLayer(polyline)
    })
  }

  return (
    <>
      
            <div id='map' ref={mapRef} />
            <button onClick={removeShapesFromLocalStorage}>
              Remove alerts from Local Storage
            </button>
    </>
  )
}
export default AlertDispatcher

