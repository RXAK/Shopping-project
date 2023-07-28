import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Offerimg from './Offerimg'
import Demo from './Demo'
const Offerimgrouter = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Offerimg/>}>
                
                <Route path='/demo' element={<Demo/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Offerimgrouter
