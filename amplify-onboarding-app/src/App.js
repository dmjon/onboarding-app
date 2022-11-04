import { 
  CreateEmployeeForm,
  EmployeeCardCollection,
  MarketingFooter,
  NavBar 
} from './ui-components';
import './App.css';
import { useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App({ user, signOut }) {

  const [showForm, setShowForm] = useState(false);
  const [updateEmployee, setUpdateEmployee] = useState();

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [deputyOrCivilian, setDeputyOrCivilian] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");


  const navbarOverrides = {
    "Add Employee": {
        style: {
          cursor: "pointer"
        },
        onClick: () => {
          setShowForm(!showForm)
        }
    },
    "signOutButton": {
      onClick: signOut
    }
  };

  const CreateEmployeeFormOverrides = {
    "Button": {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        setShowForm(false)
      }
    },
    firstName: {
      placeholder: firstName
    },
    middleName: {
      placeholder: middleName
    },
    lastName: {
      placeholder: lastName
    },
    position: {
      placeholder: position
    },
    deputyOrCivilian: {
      placeholder: deputyOrCivilian
    },
    birthDate: {
      placeholder: birthDate
    },
    startDate: {
      placeholder: startDate
    },
    weight: {
      placeholder: weight
    },
    height: {
      placeholder: height
    },
    hairColor: {
      placeholder: hairColor
    },
    eyeColor: {
      placeholder: eyeColor
    },
    homeAddress: {
      placeholder: homeAddress
    },
    profilePhoto: {
      placeholder: profilePhoto,
      src: updateEmployee == null 
      ? "https://t4.ftcdn.net/jpg/03/73/50/09/360_F_373500999_wAWkzJZRb2XHm9KeHEDcCJBkx4wR67us.jpg"
      :updateEmployee.profilePhoto
    },
    createButton: {
      isDisabled: updateEmployee ? true : false
    },
    updateButton: {
      isDisabled: !updateEmployee ? true : false
    }
  }


  return (
    <div className="App">
      <header className="App-header">
      <NavBar overrides={navbarOverrides} width={"100%"} />
          <br></br>
          <br></br>
          {showForm && (
        <CreateEmployeeForm
        prop={updateEmployee}
        overrides={CreateEmployeeFormOverrides}
        />
          )
          }
          <br></br>
          <EmployeeCardCollection 
          overrideItems={({ item, index }) => ({
            overrides: {
              Button34562809: {
                onClick: () => {
                  if (!showForm) setShowForm(true)
                  setUpdateEmployee(item);
                  setFirstName(item.firstName);
                  setMiddleName(item.middleName);
                  setLastName(item.lastName);
                  setPosition(item.position);
                  setDeputyOrCivilian(item.deputyOrCivilian);
                  setBirthDate(item.birthDate);
                  setStartDate(item.startDate);
                  setWeight(item.weight);
                  setHeight(item.height);
                  setHairColor(item.hairColor);
                  setEyeColor(item.eyeColor);
                  setHomeAddress(item.homeAddress);
                  setProfilePhoto(item.profilePhoto);
                }
              }
            }
          })}
          />
          <br></br>
          <br></br>
      <MarketingFooter width={"100%"}  />    
      </header>
    </div>
  );
}

export default withAuthenticator(App);
