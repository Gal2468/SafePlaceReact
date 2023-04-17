import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { InformationWrapper } from '../Meeting/Meeting.style'
import {  InformationContainer, InformationDesc, InformationTitle, LogoText, TitleWrapper, LastSummary, LastSummaryTitle, LastSummaryDesc, StyledIcon, ReturnIcon, Navbar } from './PatientCase.Style'

const apiUrl = "https://localhost:44337/api/patientCard/";

export default function PatientCase() {

  const navigate = useNavigate();

  const { patientId } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const getPatient = async () => {
      const result = await fetch(apiUrl + patientId);
      const json = await result.json();
      setPatient(json);
    };

    getPatient();
  }, [patientId]);

  if (!patient) {
    return null;
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
    <ReturnIcon onClick={goBack} />
    <TitleWrapper>  
    <span></span> 
    <LogoText> {patient.FirstName[0]} {patient.LastName[0]} </LogoText>
    </TitleWrapper>
    <InformationWrapper>
    <InformationContainer> 
    <InformationTitle> שם פרטי </InformationTitle>
    <InformationDesc> {patient.FirstName} {patient.LastName} </InformationDesc>
    </InformationContainer>
    <InformationContainer> 
    <InformationTitle> אימייל </InformationTitle>
    <InformationDesc> {patient.Email} </InformationDesc>
    </InformationContainer>
    <InformationContainer> 
    <InformationTitle> מספר טלפון </InformationTitle>
    <InformationDesc> {patient.phoneNumber} </InformationDesc>
    </InformationContainer>
    <InformationContainer> 
    <InformationTitle> גיל </InformationTitle>
    <InformationDesc> {patient.Age} </InformationDesc>
    </InformationContainer>
    <InformationContainer> 
    <InformationTitle> מספר מפגשים </InformationTitle>
    <InformationDesc> {patient.NumTreatments} </InformationDesc>
    </InformationContainer>
    </InformationWrapper>
    <LastSummary>
    <StyledIcon />
        <LastSummaryTitle> סיכום טיפול אחרון  </LastSummaryTitle>
        <LastSummaryDesc> להלהלהלהלהלה </LastSummaryDesc>
    </LastSummary>
    <Navbar>
      <BottomNavigation>
        <BottomNavigationAction icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction icon={<PermIdentityOutlinedIcon />} />
        <BottomNavigationAction icon={<ArticleOutlinedIcon />} />
      </BottomNavigation>
    </Navbar>
    </div>
    
  )
}
