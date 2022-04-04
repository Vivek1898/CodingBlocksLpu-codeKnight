import {useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";

//Only for logged Seesion
//Protected Route
//User Route --> USER NAV--> AND WE ARE PASSING CHILDREN FOR USER ROUTE
const UserIndex = () =>{
    const {state}=useContext(Context);
    const{user} =state;
    // console.log(user.user.name)
   

    return (
        <>
        <h1  className="pt-5 text-center text-success">User DashBoard</h1> 
       
        {user !== null && 
         <div className="text-center ">
        <pre>Name :{user.name}</pre>
        <pre>Email : {user.email}</pre>
        <pre>Institute : {user.institute}</pre>
        <pre>Branch : {user.branch}</pre>
        <pre>Mobile :{user.mobile}</pre>

        
        </div>
             }
        
        
      {/* <pre>{JSON.stringify(user,null,4)}</pre> */}


        </>
      
       
    )
}

export default UserIndex;