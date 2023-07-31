/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react"
import { getOverrideProps } from "@aws-amplify/ui-react/internal"
import {
  Button,
  Flex,
  Heading,
  TextAreaField,
  TextField
} from "@aws-amplify/ui-react"
export default function AppointmentRequest(props) {
  const { title, onRequest, onCancel, overrides, ...rest } = props
  return (
    <Flex
      gap="48px"
      direction="row"
      width="1160px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AppointmentRequest")}
      {...rest}
    >
      <Flex
        gap="48px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 41129767005")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 313")}
        >
          <Heading
            width="unset"
            height="unset"
            label="Book an Appointment with Shahmir"
            padding="0px 32px 0px 32px"
            shrink="0"
            level="1"
            children={`${""}${"Book an Appointment with "}${title}`}
            {...getOverrideProps(overrides, "Heading")}
          ></Heading>
          <TextAreaField
            width="unset"
            height="unset"
            label="Description"
            padding="0px 32px 0px 32px"
            shrink="0"
            alignSelf="stretch"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextAreaField")}
          ></TextAreaField>
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 410")}
          >
            <TextField
              width="unset"
              height="unset"
              label="Date and Time"
              shrink="0"
              alignSelf="stretch"
              placeholder=""
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField")}
            ></TextField>
          </Flex>
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 41139343187")}
          >
            <Button
              width="unset"
              height="unset"
              shrink="0"
              alignSelf="stretch"
              size="large"
              isDisabled={false}
              variation="primary"
              children="Send Request"
              onClick={onRequest}
              {...getOverrideProps(overrides, "Button39343188")}
            ></Button>
          </Flex>
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 412")}
          >
            <Button
              width="unset"
              height="unset"
              shrink="0"
              alignSelf="stretch"
              size="large"
              isDisabled={false}
              variation="default"
              children="Cancel"
              onClick={onCancel}
              {...getOverrideProps(overrides, "Button39484982")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
