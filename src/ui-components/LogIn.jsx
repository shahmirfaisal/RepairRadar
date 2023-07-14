/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, PasswordField, TextField } from "@aws-amplify/ui-react";
export default function LogIn(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="8px"
      padding="32px 32px 32px 32px"
      backgroundColor="rgba(250,250,250,1)"
      {...getOverrideProps(overrides, "LogIn")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="row"
        width="772px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 428")}
      >
        <TextField
          width="unset"
          height="unset"
          label="Email"
          grow="1"
          shrink="1"
          basis="0"
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
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 431")}
      >
        <PasswordField
          width="772px"
          height="unset"
          label="Password"
          shrink="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          hideShowPassword={false}
          {...getOverrideProps(overrides, "PasswordField")}
        ></PasswordField>
      </Flex>
      <Button
        width="772px"
        height="unset"
        shrink="0"
        boxShadow="0px 4px 9px rgba(0, 0, 0, 0.25)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="LogIn"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
