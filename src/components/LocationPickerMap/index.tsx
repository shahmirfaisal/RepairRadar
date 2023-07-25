import React from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import { LocationMarker } from "./LocationMarker"

interface Props {
  pickedLocation: LocationType | null
  setPickedLocation: React.Dispatch<React.SetStateAction<LocationType | null>>
  center: [number, number]
}

const LocationPickerMap = ({
  pickedLocation,
  setPickedLocation,
  center
}: Props) => {
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker
        pickedLocation={pickedLocation}
        setPickedLocation={setPickedLocation}
      />
    </MapContainer>
  )
}

export default LocationPickerMap
