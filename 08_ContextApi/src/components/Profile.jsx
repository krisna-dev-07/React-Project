import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const { User } = useContext(UserContext)
   if(!User) return <div>Please Login In</div>
   return <div>Welcome{User.Username}</div>
//    if(!User) return <div>Please give password</div>
//    return <div>Your Pass{User.Password}</div>

   
}

export default Profile
