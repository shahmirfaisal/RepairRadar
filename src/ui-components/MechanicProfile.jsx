/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Heading, Image } from "@aws-amplify/ui-react";
export default function MechanicProfile(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="613px"
      height="401px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="23px 24px 23px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MechanicProfile")}
      {...rest}
    >
      <Image
        width="96px"
        height="96px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Heading
        width="unset"
        height="unset"
        shrink="0"
        level="3"
        children="Shahmir Faisal"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
    </Flex>
  );
}
