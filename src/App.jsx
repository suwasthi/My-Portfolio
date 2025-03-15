import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Achievements from './Components/Achievements/Achievements';
import Myprojects from './Components/MyProjects/Myprojects';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Achievements/>
      <Myprojects/>
    </div>
  )
}

export default App
