import React from 'react'
import useAuth from '../../hooks/userAuth'
import { Navigate, useLocation } from 'react-router-dom'
import { LoadingSpinner } from '../../components/LoadingSpinner'


export const PrivateRoute = ({children}) => {
  
const {user,loading}= useAuth()
const location=useLocation()

if(loading){
 return <LoadingSpinner/>
}
if(user){
return children
}
  return  <Navigate to={"/login"} state={{from:location}} replace/>

}

