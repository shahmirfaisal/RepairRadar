/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading, Image, Text } from "@aws-amplify/ui-react";
export default function Appointment(props) {
  const {
    name,
    image,
    time,
    description,
    onToggleDescription,
    descriptionLabel,
    onAccept,
    onReject,
    onComplete,
    onAddReview,
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="800px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      boxShadow="0px 1px 4px rgba(0, 0, 0, 0.10000000149011612)"
      padding="23px 24px 23px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Appointment")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 437")}
      >
        <Image
          width="90px"
          height="90px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={image}
          {...getOverrideProps(overrides, "image")}
        ></Image>
        <Heading
          width="unset"
          height="unset"
          label="Shahmir Faisal"
          shrink="0"
          level="5"
          children={name}
          {...getOverrideProps(overrides, "Heading")}
        ></Heading>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-end"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 438")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={time}
            {...getOverrideProps(overrides, "Wednesday, 11:00 PM")}
          ></Text>
        </Flex>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        textDecoration="underline"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={descriptionLabel}
        onClick={onToggleDescription}
        {...getOverrideProps(overrides, "View description")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={description}
        {...getOverrideProps(
          overrides,
          "Here is the descripiton and that is it"
        )}
      ></Text>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 439")}
      >
        <Button
          width="unset"
          height="33px"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Accept"
          onClick={onAccept}
          {...getOverrideProps(overrides, "Button3956528")}
        ></Button>
        <Button
          width="unset"
          height="35px"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="warning"
          children="Reject"
          onClick={onReject}
          {...getOverrideProps(overrides, "Button3956535")}
        ></Button>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 440")}
      >
        <Button
          width="unset"
          height="33px"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Mark it as Completed"
          onClick={onComplete}
          {...getOverrideProps(overrides, "Button3957550")}
        ></Button>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 441")}
      >
        <Button
          width="unset"
          height="33px"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Provide Review"
          onClick={onAddReview}
          {...getOverrideProps(overrides, "Button39612848")}
        ></Button>
      </Flex>
    </Flex>
  );
}
