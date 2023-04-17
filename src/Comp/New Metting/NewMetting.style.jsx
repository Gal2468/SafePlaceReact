import styled from "styled-components";
import { ReactComponent as Icon } from '../../Img/right-arrow.svg';
import { ReactComponent as RecordIcon } from '../../Img/record-icon.svg';

export const TitleWrapper = styled.div`
background-color: #F5F5DC;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const MeetingTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

export const StyledIcon = styled(Icon)`
  width: 20px;
  height: 20px;
`;

export const InformationWrapper = styled.div`

`;

export const InformationContainer = styled.div`
text-align: right;
border-bottom: 1px solid #ffe7e7;
margin: 0px 15px 2px;
`;

export const InformationTitle = styled.p`
    margin-bottom: 3px;
`;

export const InformationDesc = styled.p`
    margin: 0px;
`;

export const InformationTextArea = styled.textarea`
  margin: 0;
  width: 100%;
  height: 100%;
  direction: rtl;
`;

export const InformationTextAreaSummery = styled.textarea`
  margin: 0;
  width: 100%;
  height: 100px;
  direction: rtl;
`;

export const ButtonDiv = styled.div`

`;

export const ButtonSummery = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 20px; /* adjust this value to change the roundness of the corners */
  background-color: whith;
  color: black;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin: 10px 32px 10px 5px;
`;

export const SaveButton = styled.button`
  width: 280px;
  height: 40px;
  border-radius: 20px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin: 10px 20px;
`;

export const ButtonAddFiles = styled.button`
 width: 150px;
  height: 40px;
  border-radius: 0;
  background-color: whith;
  color: black;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin: 10px;
`;

export const IconRecord = styled(RecordIcon)`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

export const Navbar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
