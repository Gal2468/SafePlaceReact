import styled from 'styled-components';
import { ReactComponent as Icon } from '../../Img/right-arrow.svg';


export const TitleWrapper = styled.div`
background-color: #FCCEF9;
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

export const ButtonDiv = styled.div`

`;

export const ButtonFiles = styled.button`
width: 150px;
  height: 40px;
  border-radius: 20px; /* adjust this value to change the roundness of the corners */
  background-color: whith;
  color: black;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin: 20px;
`;


