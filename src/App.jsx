import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Achievements from './Components/Achievements/Achievements';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Achievements/>
    </div>
  )
}

export default App
