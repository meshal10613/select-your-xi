import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import { useState } from 'react'
import DisplayPlayers from './components/DisplayPlayers'

function App() {
  const [free, setFree] = useState(0);
  const handleFreeCredit = () => {
    setFree(free + 100)
  }
  return (
    <>
      <Navbar free={free}></Navbar>
      <Banner handleFreeCredit={handleFreeCredit}></Banner>
      <DisplayPlayers></DisplayPlayers>
      <Footer></Footer>
    </>
  )
}

export default App
