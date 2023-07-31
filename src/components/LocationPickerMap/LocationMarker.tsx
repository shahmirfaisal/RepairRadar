import { useEffect } from "react"
import { Marker, Popup, useMapEvents } from "react-leaflet"
import { Icon } from "leaflet"

interface Props {
  pickedLocation: LocationType | null
  setPickedLocation: React.Dispatch<React.SetStateAction<LocationType | null>>
}

const icon = new Icon({
  iconUrl: "/marker.svg",
  iconSize: [35, 35]
})

export function LocationMarker({ pickedLocation, setPickedLocation }: Props) {
  const map = useMapEvents({
    click(e) {
      setPickedLocation({
        latitude: e.latlng.lat,
        longitude: e.latlng.lng
      })
    }
  })

  useEffect(() => {
    if (pickedLocation !== null) {
      map.setView(
        {
          lat: pickedLocation.latitude,
          lng: pickedLocation.longitude
        },
        13
      )
    }
  }, [pickedLocation, map])

  return pickedLocation === null ? null : (
    <Marker
      position={{
        lat: pickedLocation.latitude,
        lng: pickedLocation.longitude
      }}
      icon={icon}
    >
      <Popup>Your shop location</Popup>
    </Marker>
  )
}
