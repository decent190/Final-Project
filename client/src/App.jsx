import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom'; 
import Intro from './Components/Introduction to Classes/IntroToClasses'  
import Signup from './Components/SignupPage/SignupPage';
import Login from './Components/SigninPage/SigninPage'; 
import About from './Components/About/About';
import Dashboard from './Components/Dashboard/Dashboard';
import QuizPage from './Components/QuizPage/QuizPage';

function App() {
  
  return (
    <>
    <Routes>
    <Route path='/' element={<LandingPage/>} />
    <Route path='/intro' element={<Intro/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/login' element={<Login />} /> 
    <Route path='/about' element={<About/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/quiz' element={<QuizPage/>}/>
    </Routes>
    </>
  )
}

export default App
