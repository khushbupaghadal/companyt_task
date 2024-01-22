import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

let Registration = () => {
    let navigate = useNavigate()
    let [obj, setobj] = useState({})
    let [blankobj, setblankobj] = useState({})
    let getdata = (e) =>{
          obj[e.target.name] = e.target.value;
          blankobj[e.target.name] = "";
        setobj({...obj});
        setblankobj({...blankobj});
      }
    let login = () => {
        axios.post("https://p2carebackend.onrender.com/user/add" , obj).then((res) => {
            res.data.data ? navigate("/login") : alert("please enter unique email");
        }).catch((err) => {
            console.log(err);
        })
        setobj({...obj});
      }
  return (
    <>
        <div className=' w-75 mx-auto shadow-lg mt-5 p-5'>
            <div className="typing">
                <h3>Create An Cccount</h3>
            </div>
            <form action="#" method="GET">
                <div className="form-group mb-3">
                    <label htmlFor="first_field" className="form-label float-start">UserName</label>
                    <input name="Username" type="text" className="form-control" value={obj.Username ?? ""} placeholder="Full Name" aria-label="Full Name" onChange={getdata} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="first_field" className="form-label float-start">Name</label>
                    <input name="Name" type="text" className="form-control" id="first_field" value={obj.Name ?? ""} placeholder="Full Name" aria-label="Full Name" onChange={getdata} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="second_field" className="form-label float-start">Email</label>
                    <input name="Email" type="email" className="form-control" id="second_field" value={obj.Email ?? ""} placeholder="Email Address" aria-label="Email" onChange={getdata} />
                </div>
                <div className="form-group clearfix mb-3">
                    <label htmlFor="third_field" className="form-label float-start">Password</label>
                    <input name="Password" type="password" className="form-control" value={obj.Password ?? ""} id="third_field" placeholder="Password" aria-label="Password"  onChange={getdata} />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-primary btn-lg btn-theme" onClick={login}>Login</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Registration
