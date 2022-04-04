import {useContext, useEffect } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import Link from "next/link";

import {
  SettingOutlined,
  UserSwitchOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import { Button } from "antd";
import Text from "antd/lib/typography/Text";
import { RightCircleFilled } from "@ant-design/icons";
import axios from "axios";
import { useRouter } from "next/router";

//Only for logged Seesion
//Protected Route
//User Route --> USER NAV--> AND WE ARE PASSING CHILDREN FOR USER ROUTE
const UserIndex = () =>{
    const {state}=useContext(Context);
    const{user} =state;
    // console.log(user.user.name)
    const router=useRouter();
    useEffect(() => {
        if(user=== null) router.push("/login");
       }, [user])
    return (
        <>
        
       
        {user !== null && 
        
         <div className="text-center ">
             <h1  className="pt-5 text-center text-success">User DashBoard</h1> 
        <pre>Name :{user.name}</pre>
        <pre>Email : {user.email}</pre>
        <pre>Institute : {user.institute}</pre>
        <pre>Branch : {user.branch}</pre>
        <pre>Mobile :{user.mobile}</pre>

        
        </div>
             }
                 {user === null && 
        
        <div className="text-center ">
            <h1  className="pt-5 text-center text-success">Please Login</h1> 
            <p className="text-center pt-3">
       
       <Button
       className="mb-3"
       type="danger"
       size="large"
       icon={<SettingOutlined />}
       >
       <Link href="/login">
      
            <a className="text-clr" type="sucess" >Login</a>
            </Link>  
       </Button>
          

          </p>
         
       </div>
            }
        
        
      {/* <pre>{JSON.stringify(user,null,4)}</pre> */}


        </>
      
       
    )
}

export default UserIndex;