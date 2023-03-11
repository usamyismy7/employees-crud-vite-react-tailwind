import React from 'react'
import Home from './components/Home'  
import Navbar from './components/Navbar'
import EmployeeDetails from './components/EmployeeDetails'
import AddEmployee from './components/AddEmployee'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/employee/:id' element={<EmployeeDetails />} />
            <Route path='/new-employee' element={<AddEmployee />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
