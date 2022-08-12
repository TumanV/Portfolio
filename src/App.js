import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Main from './Pages/Main';
import AboutPage from './Pages/AboutMe';
import CarouselBox from './Components/CarouselBox';
import Contacts from './Pages/Contacts';
import Footers from './Pages/Footers';
import MyProjects from './Pages/MyProjects';

function App() {
  return (
    <>
      <Main/>
      <CarouselBox/>
      <AboutPage/>
      <MyProjects/>
      <Contacts/>
      <Footers/>
    </>
  );
}

export default App;
