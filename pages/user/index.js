import {useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";

//Only for logged Seesion
//Protected Route
//User Route --> USER NAV--> AND WE ARE PASSING CHILDREN FOR USER ROUTE
const UserIndex = () =>{
    const {state:user}=useContext(Context);
    // console.log(user.user.name)

    return (
        <>
        <h1  className="pt-5 text-center text-success">User DashBoard</h1> 
        <div className="text-center ">
        
        <pre>Name : {user.user.name}</pre>
        <pre>Email : {user.user.email}</pre>
        <pre>Mobile : {user.user.mobile}</pre>
        <pre>Institute : {user.user.institute}</pre>
        <pre>Branch : {user.user.branch}</pre>
        </div>
        
        
        
      {/* <pre>{JSON.stringify(user,null,4)}</pre> */}


        </>
      
       
    )
}

export default UserIndex;