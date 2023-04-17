import styled from "styled-components";
import { ReactComponent as Icon } from '../../Img/left-arrow-svgrepo-com.svg';
import { ReactComponent as BackIcon } from '../../Img/Right_arrow_back.svg.svg';



export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background-color: #ffe5cc;
  width: 100px;
  height: 100px;
  z-index: 1000;
  margin-bottom: 80px;
`;

export const LogoText = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;


export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
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
  color: gray;
`;

export const LastSummary = styled.div`
   border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin: 20px auto 0 auto;
  background-color: white;
  max-width: 70%;
  position: relative;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const LastSummaryTitle = styled.p`
  margin-bottom: 3px;
  margin-top: 0;
  font-size: 18px;
`;

export const LastSummaryDesc = styled.p`
  margin: 0;
  font-size: 16px;
  text-align: right;
  color: gray;
  word-wrap: break-word;
`;

export const StyledIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 10px;
`;

export const ReturnIcon = styled(BackIcon)`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
`;

export const Navbar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

