import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import Registration from './Registration'
import Login from './Login'

const Router = () => {
    const [Islogin, setIslogin] = useState(JSON.parse(localStorage.getItem("IsLogin")))
  return (
    <>
      <BrowserRouter>
            <Routes>
                {
                    Islogin ?
                    (
                      <>
                        <Route path='/' element={<Navigate to = '/admin'/>}/>
                        <Route path='/admin' element={<Admin setIslogin={setIslogin}/>}/>
                      </>
                    ):
                    (
                      <>
                        <Route path='/' element={<Navigate to = '/login'/>}/>
                        <Route path='/login' element={<Login  setIslogin={setIslogin}/>}/>
                      </>
                    )
                }
                <Route path='/registration' element={<Registration />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router
