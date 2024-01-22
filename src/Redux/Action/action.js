import axios from "axios"
// import { GETAPI } from "../Type/Type"



export const LogiInAcess = (obj, navigate) => {
	return (dispatch) => {
		axios
			.post(
				'https://p2carebackend.onrender.com/user/login',
				obj
			)
			.then(async (res) => {
				const user = res.data
				if (user.status === true) {
					await dispatch({
						type: 'LOGIN_SUCCESS',
						payload: user.data,
						isLoggedIn: true,
					})
					localStorage.setItem('isLoggedIn', true)
					localStorage.setItem('token', user.data.token)
					localStorage.setItem('userName', user.data.Username)
					localStorage.setItem('id', user.data._id)
					.then(()=>{
                        navigate('/')
                    })
				} else {
					dispatch({
						type: 'LOGIN_FAIL',
						payload: user.message,
					})
				}
			})
			.catch((error) => {
				dispatch({ type: 'LOGIN_FAIL', payload: error.message })
			})
	}
}