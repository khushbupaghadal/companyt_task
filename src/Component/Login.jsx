import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LogiInAcess } from '../Redux/Action/action'

let Login = (props) => {
    let  Navigate = useNavigate()
    const dispatch = useDispatch()
    const userlogin = useSelector((state) => state.loginreducer)
    let [obj, setobj] = useState({})

    let getData = (e) =>{
        obj[e.target.name] = e.target.value
        setobj({...obj})
      }
      let login = () =>{
        axios.post("https://p2carebackend.onrender.com/user/login",obj).then((res) => {
          console.log(res)
          if(res.data.status == "Successful"){
            localStorage.setItem("IsLogin",true)
            localStorage.setItem("token", res.data.data.token)
            localStorage.setItem('obj' , JSON.stringify(res.data.data))
            localStorage.setItem('id', res.data.data._id)
            props.setIslogin(true);
            Navigate("/");
          }
          else{
            alert(res.data.message)
          }
      })
        dispatch(LogiInAcess(obj , Navigate))
      }
      let Registration = () =>{
        Navigate("/registration")
      }
  return (
    <>
      <div className=' w-75 mx-auto shadow-lg mt-5 p-5'>
            <div className="typing">
                <h3>Sign Into Your Account</h3>
            </div>
            <form action="#" method="GET">
                <div className="form-group me-3">
                    <label htmlFor="second_field" className="form-label float-start">Email address</label>
                    <input name="Email" type="email" className="form-control" id="second_field" placeholder="Email Address" aria-label="Email Address" onChange={getData}/>
                </div>
                <div className="form-group clearfix me-3">
                    <label htmlFor="third_field" className="form-label float-start">Password</label>
                    <input name="Password" type="password" className="form-control" id="third_field" placeholder="Password" aria-label="Password" onChange={getData}/>
                </div>
                <div className="form-group clearfix">
                    <button type="button" className="btn btn-primary btn-lg btn-theme mt-3" onClick={login}>Login</button>
                </div>
            </form>
            <div className="clearfix mt-2"></div>
            <p>Don't have an account?<a href="" onClick={Registration}> Register here</a></p>
      </div>
    </>
  )
}

export default Login
