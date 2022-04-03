import {useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";

//Only for logged Seesion
//Protected Route
//User Route --> USER NAV--> AND WE ARE PASSING CHILDREN FOR USER ROUTE
const UserIndex = () =>{
    const {state:user}=useContext(Context);
    // console.log(user.user.name)xvnxvn
   

    return (
        <>
        <h1  className="pt-5 text-center text-success">User DashBoard</h1> 
       
        {user !== null && 
         <div className="text-center ">
      
        
        </div>
             }
        
        
      {/* <pre>{JSON.stringify(user,null,4)}</pre> */}


        </>
      
       
    )
}

export default UserIndex;