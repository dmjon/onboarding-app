/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function EmployeeCard(props) {
  const { employee, overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="351px"
      height="526px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="35px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(245,245,245,1)"
      {...rest}
      {...getOverrideProps(overrides, "EmployeeCard")}
    >
      <Image
        width="194px"
        height="178px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={employee?.profilePhoto}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Name")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="center"
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
          children={`${employee?.firstName}${" "}${employee?.lastName}`}
          {...getOverrideProps(overrides, "Dylan Jones")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={employee?.position}
          {...getOverrideProps(overrides, "Automation Coordinator")}
        ></Text>
      </Flex>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="272px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        backgroundColor="rgba(184,206,249,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="View Profile"
        {...getOverrideProps(overrides, "Button34502859")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="272px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        backgroundColor="rgba(245,217,188,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Update"
        {...getOverrideProps(overrides, "Button34562809")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="272px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        backgroundColor="rgba(245,188,188,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Delete"
        {...getOverrideProps(overrides, "Button34562817")}
      ></Button>
    </Flex>
  );
}
