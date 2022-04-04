

import {useContext, useState,useEffect } from "react";
import { Context } from "../../context";
import Link from "next/link";

import {
  SettingOutlined,
  UserSwitchOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import { Button } from "antd";
import Text from "antd/lib/typography/Text";
import { useRouter } from "next/router";
import axios from "axios";

const Code = () =>{
    const[students,setStudents]=useState([]);
    function getstudents(){
        // https://reststudents.com/v3.1/all
       
    axios.get("https://vast-mesa-19498.herokuapp.com/employees").then((sucess) =>{
     setStudents(sucess.data);
    // console.log(sucess.data)
     
 
    },(err)=>{
        console.log(err)
    })
     }

    const {state}=useContext(Context);
    const{user} =state;
    const router=useRouter();
    useEffect(() => {
        if(user=== null) router.push("/login");
       }, [user])
    return (
        <>
         {user !== null && user.role.includes("Instructor")  &&
        
        <div  className=" pt-1 text-center text-success">
    <h1 className="pt-5 text-center text-success">All User Details</h1>
   <Button onClick={getstudents}> Get Data </Button>
   <table className="table">
   <thead>
    <tr>
    <th>Index</th>
      <th>Name</th>
      <th>Email</th>
      <th>Institute</th>
      <th>Branch</th>
      <th>Mobile</th>
    </tr>
  </thead>
  <tbody>
  {students.map((data,index) => (
                        
                        <tr>
                             <td>
                            {index+1}
                            </td>

                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.institute}</td>
                            <td>{data.branch}</td>
                            <td>{data.mobile}</td>
                          
                        </tr>

                    ))}

  </tbody>

</table>

   
        
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
        </>
    )
  };
  
  export default Code;