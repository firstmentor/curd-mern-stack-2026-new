import React from 'react'
import CreateStudent from './curd/CreateStudent'
import DisplayStudent from './curd/DisplayStudent'
import { Route, Routes } from 'react-router-dom'
import EditStudent from './curd/EditStudent'

function App() {
  return (
    <>
       <Routes>
        <Route path='/' element ={<CreateStudent/>}/>
        <Route path='/displayStudent' element ={<DisplayStudent/>}/>
         <Route path='/editStudent/:id' element ={<EditStudent/>}/>
       </Routes>
    
    
    </>
  )
}

export default App