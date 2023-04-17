import React, { useEffect, useState } from 'react'
import { ButtonDiv, ButtonFiles, InformationContainer, InformationDesc, InformationTitle, InformationWrapper, MeetingTitle, StyledIcon, TitleWrapper } from './Meeting.style'



export default function Metting() {

  return (
    <div>
    <TitleWrapper>  
    <span></span> 
    <MeetingTitle> סיכום טיפול </MeetingTitle>
    <StyledIcon />
    </TitleWrapper>
    <InformationWrapper>
    <InformationContainer> 
    <InformationTitle> מטופל </InformationTitle>
    <InformationDesc> </InformationDesc>
    </InformationContainer>
    <InformationContainer> 
    <InformationTitle> מספר פגישה </InformationTitle>
    <InformationDesc> 7 </InformationDesc>
    </InformationContainer>
    <InformationContainer> 
    <InformationTitle> תאריך </InformationTitle>
    <InformationDesc> 17.01.2023 </InformationDesc>
    </InformationContainer>
    <InformationContainer> 
    <InformationTitle> שעה </InformationTitle>
    <InformationDesc> 12:00-12:45 </InformationDesc>
    </InformationContainer>
    <InformationContainer> 
    <InformationTitle> חשוב לציין </InformationTitle>
    <InformationDesc> המטופלת ביקשה לבוא עם בובה לפגישה הבאה </InformationDesc>
    </InformationContainer>
    <InformationContainer> 
    <InformationTitle> סיכום </InformationTitle>
    <InformationDesc> להלהלה </InformationDesc>
    </InformationContainer>
    </InformationWrapper>
    <ButtonDiv>
      <ButtonFiles> קבצים למטופל </ButtonFiles>
    </ButtonDiv>
    </div>
  )
}

