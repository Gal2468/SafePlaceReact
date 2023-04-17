import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { GreenStripe, LastMeetingContainer,  LastMeetingsWrapper,  LeftIcon, MeetingContainer, MeetingDate, MeetingDate1, MeetingHours, MeetingNum, MeetingRoom, MeetingText, MeetingTime, Navbar, RecentMeetingsContainer, RecentMeetingsTitle, SummaryButton, TherapistDiv, TherapistName, TitleName, TitleWrapper } from './HomePageTherapit.Style'

const apiUrl = "https://localhost:44337/api/Therapist/"

export default function HomePageTherapit() {

    const [Meeting, setPaMeeting] = useState([]);
    const { therapistId } = useParams(); // get therapistId from URL

    const GetMeeting = async (therapistId) => {
      const result = await fetch(apiUrl + 1)
      const json = await result.json() 
      setPaMeeting(json);
    }

    useEffect(() => {
      GetMeeting(therapistId) 
    }, [therapistId]); 

    const currentDate = new Date().toLocaleDateString(); // get current date in the format of "MM/DD/YYYY"

  return (
    <div>
    <TitleWrapper>  
    <TherapistDiv>
    <TherapistName> {Meeting && Meeting.length > 0 && `${Meeting[0].FirstName[0]} ${Meeting[0].LastName[0]}`}  </TherapistName>
    </TherapistDiv>
    <span></span> 
    <TitleName> {Meeting && Meeting.length > 0 && `${Meeting[0].FirstName}`} היי </TitleName>
    </TitleWrapper>
    <MeetingDate> פגישות להיום- {currentDate} </MeetingDate>
    {Meeting != null && Meeting.length > 0 ? Meeting.map((meeting) => (
          <MeetingCard key={meeting.Therapist_Id} meeting={meeting} />
        )) : <div> אין פגישות להיום </div>}
    <RecentMeetingsContainer>
      <RecentMeetingsTitle> :פגישות אחרונות </RecentMeetingsTitle>
      <LastMeetingsWrapper>
      {Meeting != null && Meeting.length > 0 ? Meeting.map((meeting) => (
      <LastMeetingCard  meeting={meeting} />
)) : <div> לא התקיימו פגישות היום </div>}
      </LastMeetingsWrapper>
    </RecentMeetingsContainer>
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



  const MeetingCard = ({ meeting }) => {
  if (meeting.WasDone === 'n' || meeting.WasDone === 'N')
  return (
    <MeetingContainer> 
    <GreenStripe />
    <MeetingText> {meeting.PatientFirstName} {meeting.PatientLastName} פגישה עם </MeetingText>
    <MeetingRoom> חדר {meeting.Room_Num} </MeetingRoom>
    <MeetingHours> {meeting.StartTime}:00 - {meeting.EndTime}:00 </MeetingHours>
    </MeetingContainer>
  );
};

const LastMeetingCard = ({ meeting }) => {

  const date = new Date(meeting.Treatment_Date).toLocaleDateString();

  const navigate = useNavigate(); 

    const Go2MeetingSummary = () => {
      const date = new Date(meeting.Treatment_Date).toLocaleDateString();
      const time = `${meeting.StartTime}:00 - ${meeting.EndTime}:00`;
  
     const DateTime = {
      Date: date,
      Time: time,
     };

     navigate("/NewMetting", { state: DateTime });

    }

  if (meeting.WasDone === 'y' || meeting.WasDone === 'Y')
  return (
<LastMeetingContainer> 
<MeetingText> {meeting.PatientFirstName} {meeting.PatientLastName}   </MeetingText>
<MeetingNum> פגישה מספר {meeting.Treatment_Id} </MeetingNum>
<MeetingTime> {meeting.StartTime}:00 - {meeting.EndTime}:00 </MeetingTime>
<MeetingDate1> {date} </MeetingDate1>
<SummaryButton onClick={Go2MeetingSummary}> סיכום פגישה <LeftIcon /> </SummaryButton>
</LastMeetingContainer>

);
};
