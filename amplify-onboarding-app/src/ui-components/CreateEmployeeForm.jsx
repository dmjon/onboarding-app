/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Employee } from "../models";
import { schema } from "../models/schema";
import {
  Button,
  Divider,
  Heading,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function CreateEmployeeForm(props) {
  const { prop, overrides, ...rest } = props;
  const [firstNameValue, setFirstNameValue] = useStateMutationAction("");
  const [middleNameValue, setMiddleNameValue] = useStateMutationAction("");
  const [lastNameValue, setLastNameValue] = useStateMutationAction("");
  const [positionValue, setPositionValue] = useStateMutationAction("");
  const [homeAddressValue, setHomeAddressValue] = useStateMutationAction("");
  const [birthDateValue, setBirthDateValue] = useStateMutationAction("");
  const [startDateValue, setStartDateValue] = useStateMutationAction("");
  const [weightValue, setWeightValue] = useStateMutationAction("");
  const [heightValue, setHeightValue] = useStateMutationAction("");
  const [hairColorValue, setHairColorValue] = useStateMutationAction("");
  const [eyeColorValue, setEyeColorValue] = useStateMutationAction("");
  const [deputyOrCivilianValue, setDeputyOrCivilianValue] =
    useStateMutationAction("");
  const [profilePhotoValue, setProfilePhotoValue] = useStateMutationAction("");
  const createButtonOnClick = useDataStoreCreateAction({
    fields: {
      firstName: firstNameValue,
      middleName: middleNameValue,
      lastName: lastNameValue,
      position: positionValue,
      homeAddress: homeAddressValue,
      birthDate: birthDateValue,
      startDate: startDateValue,
      weight: weightValue,
      height: heightValue,
      hairColor: hairColorValue,
      eyeColor: eyeColorValue,
      deputyOrCivilian: deputyOrCivilianValue,
      profilePhoto: profilePhotoValue,
    },
    model: Employee,
    schema: schema,
  });
  const updateButtonOnClick = useDataStoreUpdateAction({
    fields: {
      firstName: firstNameValue,
      middleName: middleNameValue,
      lastName: lastNameValue,
      position: positionValue,
      homeAddress: homeAddressValue,
      birthDate: birthDateValue,
      startDate: startDateValue,
      weight: weightValue,
      height: heightValue,
      hairColor: hairColorValue,
      eyeColor: eyeColorValue,
      deputyOrCivilian: deputyOrCivilianValue,
      profilePhoto: profilePhotoValue,
    },
    id: prop?.id,
    model: Employee,
    schema: schema,
  });
  return (
    <View
      width="782px"
      height="1492px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CreateEmployeeForm")}
    >
      <View
        width="782px"
        height="1529px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-3.35%"
        bottom="0.87%"
        left="0%"
        right="0%"
        borderRadius="40px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 1164")}
      ></View>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="697px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="11.73%"
        bottom="83.45%"
        left="7.54%"
        right="3.32%"
        padding="0px 0px 0px 0px"
        label="First Name"
        placeholder="First Name"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={firstNameValue}
        onChange={(event) => {
          setFirstNameValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="697px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="17.02%"
        bottom="78.15%"
        left="7.54%"
        right="3.32%"
        padding="0px 0px 0px 0px"
        label="Middle Name"
        placeholder="Middle Name"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={middleNameValue}
        onChange={(event) => {
          setMiddleNameValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "middleName")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="697px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="22.39%"
        bottom="72.79%"
        left="7.54%"
        right="3.32%"
        padding="0px 0px 0px 0px"
        label="Last Name"
        placeholder="Last Name"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={lastNameValue}
        onChange={(event) => {
          setLastNameValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="697px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="27.68%"
        bottom="67.49%"
        left="7.54%"
        right="3.32%"
        padding="0px 0px 0px 0px"
        label="Position"
        placeholder="Position"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={positionValue}
        onChange={(event) => {
          setPositionValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "position")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="697px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="32.98%"
        bottom="62.2%"
        left="7.54%"
        right="3.32%"
        padding="0px 0px 0px 0px"
        label="Deputy or Civilian?"
        placeholder="Please select an option"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={deputyOrCivilianValue}
        onChange={(event) => {
          setDeputyOrCivilianValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "deputyOrCivilian")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="697px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="38.27%"
        bottom="56.9%"
        left="7.54%"
        right="3.32%"
        padding="0px 0px 0px 0px"
        label="Birth Date"
        placeholder="Birth Date"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={birthDateValue}
        onChange={(event) => {
          setBirthDateValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "birthDate")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="697px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="43.57%"
        bottom="51.61%"
        left="7.54%"
        right="3.32%"
        padding="0px 0px 0px 0px"
        label="Start Date"
        placeholder="Start Date"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={startDateValue}
        onChange={(event) => {
          setStartDateValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "startDate")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="697px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="48.86%"
        bottom="46.31%"
        left="7.54%"
        right="3.32%"
        padding="0px 0px 0px 0px"
        label="Weight"
        placeholder="Weight"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={weightValue}
        onChange={(event) => {
          setWeightValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "weight")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="697px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="54.16%"
        bottom="41.02%"
        left="7.54%"
        right="3.32%"
        padding="0px 0px 0px 0px"
        label="Height"
        placeholder="Height"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={heightValue}
        onChange={(event) => {
          setHeightValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "height")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="697px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="59.45%"
        bottom="35.72%"
        left="7.54%"
        right="3.32%"
        padding="0px 0px 0px 0px"
        label="Hair Color"
        placeholder="Hair Color"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={hairColorValue}
        onChange={(event) => {
          setHairColorValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "hairColor")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="697px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="64.75%"
        bottom="30.43%"
        left="7.54%"
        right="3.32%"
        padding="0px 0px 0px 0px"
        label="Eye Color"
        placeholder="Eye Color"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={eyeColorValue}
        onChange={(event) => {
          setEyeColorValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "eyeColor")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="697px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="70.04%"
        bottom="25.13%"
        left="7.54%"
        right="3.32%"
        padding="0px 0px 0px 0px"
        label="Home Address"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={homeAddressValue}
        onChange={(event) => {
          setHomeAddressValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "homeAddress")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="697px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="75.34%"
        bottom="19.84%"
        left="7.54%"
        right="3.32%"
        padding="0px 0px 0px 0px"
        label="Profile Photo"
        placeholder="Photo URL"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={profilePhotoValue}
        onChange={(event) => {
          setProfilePhotoValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "profilePhoto")}
      ></TextField>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="-1.81%"
        bottom="98.99%"
        left="85.42%"
        right="3.2%"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        backgroundColor="rgba(242,30,43,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Cancel"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Heading
        display="flex"
        gap="0"
        direction="row"
        width="702px"
        height="91px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="2.68%"
        bottom="91.22%"
        left="4.73%"
        right="5.5%"
        padding="0px 0px 0px 0px"
        level="1"
        children="Create New Employee Record"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Divider
        width="782px"
        height="1.63px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="10.54%"
        bottom="89.36%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="84.38%"
        bottom="12.8%"
        left="7.42%"
        right="71.1%"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        backgroundColor="rgba(10,207,131,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Create Employee"
        onClick={() => {
          createButtonOnClick();
        }}
        {...getOverrideProps(overrides, "createButton")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="84.38%"
        bottom="12.8%"
        left="46.36%"
        right="42.01%"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        backgroundColor="rgba(174,179,183,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Update"
        onClick={() => {
          updateButtonOnClick();
        }}
        {...getOverrideProps(overrides, "updateButton")}
      ></Button>
    </View>
  );
}
