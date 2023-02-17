import React from 'react'
import Header from './Components/Header'
import "./App.css"
import Body from './Components/Body'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import MainContainer from './Components/MainContainer'
import WatchPage from './Components/WatchPage'

const App = () => {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path='/' element={<Body/>}>
          <Route path='/' element={<MainContainer/>}/>
          <Route path='/watch' element={<WatchPage/>}/>
          <Route/>
          </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App