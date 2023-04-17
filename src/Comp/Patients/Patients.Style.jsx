import styled from "styled-components";
import { ReactComponent as Icon } from '../../Img/search.svg';
import { ReactComponent as IconFilter } from '../../Img/filterNew.svg';
import { ReactComponent as LeftArrowIcon } from '../../Img/left-arrow-svgrepo-com.svg';

export const Container = styled.div`
  padding: 80px 0;
`;

export const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  width: 75%;
  margin: 0 auto;
  margin-left: auto;
  border: 2px solid #f2f2f2;
  margin-top: 48px;
`;

export const SearchText = styled.input`
  font-size: 18px;
  margin: 0;
  text-align: right;
  flex-grow: 1;
  color: gray;
  margin-right: 5px;
  outline: none;
  border: none;
`;

export const StyledIcon = styled(Icon)`
  width: 20px;
  height: 20px;
`;

export const StyledFilterIcon = styled(IconFilter)`
  width: 20px;
  height: 20px;
  position: absolute; /* set position to absolute */
  left: 10; /* set left property to 0 */
  margin-right: auto
`;

export const PatientDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  width: 75%;
  margin: 40px auto 0 auto;
  margin-left: auto;
  border: 2px solid #f2f2f2;
  height: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

export const PatientName = styled.p`
  font-size: 18px;
  margin: 0;
  text-align: center;
  flex-grow: 2;
  color: gray;
  margin-right: 5px;
`;

export const LogoContainer = styled.div`
   display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f2f2f2;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

export const LogoText = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
  margin: 0;
  line-height: 50px;
`;

export const LeftIcon = styled(LeftArrowIcon)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const TherapistDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1px;
  margin-top: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #986F6F;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  margin: 20px;
`;

export const TherapistName = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
  margin: 0;
  line-height: 50px;
`;

export const Navbar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
