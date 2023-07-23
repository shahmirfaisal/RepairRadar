/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Heading,
  Rating,
  Text,
  TextAreaField,
} from "@aws-amplify/ui-react";
export default function AddReview(props) {
  const { onAddReview, onCancel, overrides, ...rest } = props;
  return (
    <Flex
      gap="48px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AddReview")}
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
        {...getOverrideProps(overrides, "Frame 4113959590")}
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
            padding="0px 32px 0px 32px"
            shrink="0"
            level="1"
            children="Provide Your Feedback"
            {...getOverrideProps(overrides, "Heading")}
          ></Heading>
          <Flex
            gap="8px"
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
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Rating"
              {...getOverrideProps(overrides, "Rating39591209")}
            ></Text>
            <Rating
              width="unset"
              height="unset"
              shrink="0"
              size="default"
              {...getOverrideProps(overrides, "Rating39591198")}
            ></Rating>
          </Flex>
          <TextAreaField
            width="unset"
            height="unset"
            label="Review"
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
            {...getOverrideProps(overrides, "Frame 4113959596")}
          >
            <Button
              width="unset"
              height="unset"
              shrink="0"
              alignSelf="stretch"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Add Review"
              onClick={onAddReview}
              {...getOverrideProps(overrides, "Button3959597")}
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
              size="default"
              isDisabled={false}
              variation="default"
              children="Cancel"
              onClick={onCancel}
              {...getOverrideProps(overrides, "Button3959599")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
