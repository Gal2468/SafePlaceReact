import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePageTherapit from './Comp/HomePageTherapist/HomePageTherapit';
import Metting from './Comp/Meeting/Metting';
import NewMetting from './Comp/New Metting/NewMetting';
import PatientCase from './Comp/Patient Case/PatientCase';
import Patients from './Comp/Patients/Patients';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Patients />} />
        <Route path='/PatientCase/:patientId' element={<PatientCase/>} />
        <Route path='/NewMetting' element={<NewMetting/>} />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
