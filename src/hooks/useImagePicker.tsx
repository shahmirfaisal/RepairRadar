import { Auth, DataStore, Storage } from "aws-amplify"
import { useState, useCallback } from "react"
import { User } from "../models"
import { useAuth } from "../context/AuthContext"
import { toast } from "react-hot-toast"

export const useImagePicker = (initialImage: string) => {
  const [image, setImage] = useState(initialImage)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const { user, authUser, setPicture } = useAuth()

  const pickImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const file = e.target.files[0]
    const fileReader = new FileReader()

    fileReader.onload = () => {
      setImage(fileReader.result as string)
      setImageFile(file)
    }

    fileReader.readAsDataURL(file)
  }

  const uploadImageHandler = useCallback(async () => {
    try {
      const { key } = await Storage.put(
        `${user!.id}.${imageFile?.type?.split("/")?.[1]}`,
        imageFile!
      )

      // const url = await Storage.get(
      //   `${user!.id}.${imageFile?.type?.split("/")?.[1]}`
      // )
      const url = `https://repairradar-storage-25cc0337152716-staging.s3.eu-north-1.amazonaws.com/public/${key}`
      const originalUser = await DataStore.query(User, (u) =>
        u.userId.eq(user!.id)
      )
      await DataStore.save(
        User.copyOf(originalUser[0], (updated) => {
          updated.picture = url
        })
      )
      await Auth.updateUserAttributes(authUser, {
        picture: url
      })
      setPicture(url)
      // setActiveStep((prev) => prev + 1)
    } catch (error) {
      toast.error(error.message)
    }
  }, [authUser, imageFile, user, setPicture])

  return {
    image,
    imageFile,
    pickImage: pickImageHandler,
    uploadImage: uploadImageHandler
  }
}
