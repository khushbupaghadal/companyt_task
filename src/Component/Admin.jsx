import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

const Admin = (props) => {
  const navigate = useNavigate()
  const logout = () =>{
    localStorage.removeItem("IsLogin")
    props.setIslogin(false)
    navigate("/")

}

  return (
    <>
      <NavLink to="/admin"></NavLink>
      <div className=' w-50 d-flex justify-content-end mt-5 mx-auto'>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Data
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={logout}>logOut</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>     
    </>
  )
}

export default Admin
