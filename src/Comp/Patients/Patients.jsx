import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Container, LeftIcon,LogoContainer,LogoText,Navbar,PatientDiv,PatientName,SearchDiv,SearchText,StyledFilterIcon,StyledIcon, TherapistDiv, TherapistName,} from "./Patients.Style";

const apiUrl = "https://localhost:44337/api/Patient/"

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [query, setQuery] = useState("");
  const { therapistId } = useParams(); // get therapistId from URL
 
  
  const getPatients = async (therapistId) => {
    const result = await fetch(apiUrl + 1)
    const json = await result.json() 
    setPatients(json);
  }

  useEffect(() => {
    getPatients(therapistId) // call getPatients with therapistId
  }, [therapistId]); // add therapistId as a dependency to useEffect

  const filteredPatients = query ? patients.filter(patient => {
   return patient.FirstName.toLowerCase().includes(query.toLowerCase()) || patient.LastName.toLowerCase().includes(query.toLowerCase()) 
  }) : patients

  return (
    <div> 
        <Container>
        <TherapistDiv>
        <TherapistName> {patients.length > 0 && `${patients[0].TherapistFirstName[0]} ${patients[0].TherapistLastName[0]}`} </TherapistName>
        </TherapistDiv>
        <SearchDiv>
          <SearchText onChange={event => setQuery(event.target.value)} type={"text"} placeholder="חיפוש..." />
          <StyledIcon />
          <StyledFilterIcon />
        </SearchDiv>
        {filteredPatients.map((patient) => (
          <PatientCard key={patient.Patient_Id} patient={patient} />
        ))}
      </Container>
      <Navbar>
      <BottomNavigation>
        <BottomNavigationAction icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction icon={<PermIdentityOutlinedIcon />} />
        <BottomNavigationAction icon={<ArticleOutlinedIcon />} />
      </BottomNavigation>
    </Navbar>
    </div>
  );
}





    const PatientCard = ({ patient }) => {

    const navigate = useNavigate(); 

    const Go2PatientCase = () => {
      console.log(patient);
      navigate(`/PatientCase/${patient.patientId}`);
    }

  return (
    <PatientDiv onClick={Go2PatientCase}>
      <LeftIcon />
      <PatientName>
        {" "}
        {patient.FirstName} {patient.LastName}
      </PatientName>
      <LogoContainer>
        <LogoText>
          {" "}
          {patient.FirstName[0]} {patient.LastName[0]}
        </LogoText>
      </LogoContainer>
    </PatientDiv>
  );
};











