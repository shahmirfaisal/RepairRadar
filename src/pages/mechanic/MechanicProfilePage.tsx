import { Button, Flex, Heading, Image, View } from "@aws-amplify/ui-react"
import { useEffect, useState } from "react"
import { User } from "../../models"
import { useParams } from "react-router-dom"
import { DataStore } from "aws-amplify"
import { toast } from "react-hot-toast"
import { MapContainer, Marker, TileLayer } from "react-leaflet"
import AppointmentRequest from "../../ui-components/AppointmentRequest"
import AppointmentRequestModal from "../../components/AppointmentRequestModal"
import { useAuth } from "../../context/AuthContext"
import Map from "../../components/Map"

const MechanicProfilePage = () => {
  const { user } = useAuth()

  return (
    <View marginBottom="100px">
      <Heading level={1} marginBottom="30px">
        Your Profile
      </Heading>

      <View marginTop="50px">
        <Image
          src={user?.picture}
          width="150px"
          height="150px"
          objectFit="contain"
          backgroundColor="#dedede"
          borderRadius="50%"
        />

        <Heading level={3} marginTop="10px">
          {user?.name}
        </Heading>

        <Heading level={5} marginTop="10px">
          {user?.email}
        </Heading>

        <View
          border="3px solid #161617"
          width={{ base: "100%", large: "100%" }}
          marginTop="30px"
          height="500px"
        >
          <Map
            markers={[
              {
                position: {
                  lat: parseFloat(user?.latitude!),
                  lng: parseFloat(user?.longitude!)
                },
                label: user?.name
              }
            ]}
            center={[+user?.latitude, +user?.longitude]}
          />

          <Flex marginTop="50px">
            <Button variation="primary" size="large" onClick={() => {}}>
              Edit Profile
            </Button>
          </Flex>
        </View>
      </View>
    </View>
  )
}

export default MechanicProfilePage
