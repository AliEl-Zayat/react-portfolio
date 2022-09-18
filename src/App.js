import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Components
// import Navigationbar from './Components/Navigationbar/Navigationbar'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import HeadingOfSection from './Components/HeadingOfSection/HeadingOfSection';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Canaves from './Components/Canaves/Canaves';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import TimeLine from './Components/TimeLine/TimeLine';
const App = () => {
  return (
    <BrowserRouter>
      {/* <Navigationbar ownerName='Zayat'/> */}
      <Canaves ownerName='Zayat'/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Resume' element={<Resume/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Portfolio' element={<Portfolio/>}/>
      <Route path='/Testimonials' element={<Testimonials/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/HeadingOfSection' element={<HeadingOfSection/>}/>
      <Route path='/TimeLine' element={<TimeLine/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App