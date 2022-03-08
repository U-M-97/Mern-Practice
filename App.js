import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './Signup'

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Signup />}></Route>
          </Routes> 
      </BrowserRouter>
    
  )
}

export default App