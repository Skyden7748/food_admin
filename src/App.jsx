import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './assets/pages/Add/Add'
import List from './assets/pages/List/List'
import Orders from './assets/pages/Orders/Orders'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const url = "http://localhost:4000"
  return (
    <div>
      <ToastContainer/>
      <NavBar/>
      <hr/>
      <div className='app-content'>
          <Sidebar/>
          <Routes>
            <Route path = '/Add' element = {<Add url = {url}/> }/>
            <Route path = '/List' element = {<List url = {url}/>}/>
            <Route path = '/Orders' element = {<Orders url = {url}/>}/>
          </Routes>
      </div>
    </div>
  )
}

export default App
