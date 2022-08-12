import './index.css';
import React from 'react';
import Services from './Services';
import Contact from './Contact';
import Common from './Common';
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Common value1={"Grow Your Bussiness with"} value2={"Finding Oppurtunities"} value3={"If you feel ashamed, dont get anymore."} />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/About' element={<Common value1={"Welcome To About Page"} value2={"OF OUR WEBSITE"} value3={"If you feel ashamed, dont get anymore."} />} />
        <Route exact path='/services' element={<Services />} />
      </Routes>
    </>
  )
}

export default App;
