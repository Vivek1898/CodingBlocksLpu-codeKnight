
import {useContext, useEffect } from "react";
import { Context } from "../../context";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  SettingOutlined,
  UserSwitchOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import { Button } from "antd";
import Text from "antd/lib/typography/Text";


const Code = () =>{
    const {state}=useContext(Context);
    const{user} =state;
    const router=useRouter();
    useEffect(() => {
        if(user=== null) router.push("/login");
       }, [user])
    return (
        <>
        {user !== null && 
      
        <div  className=" pt-5 text-center text-success">
    
    <h1 className="pt-5 text-center text-success">Start Coding</h1>
        <a   href="https://cses.fi/problemset/" target="blank">Day 1</a> <br></br>
        <a   href="https://cses.fi/problemset/" target="blank">Day 2</a> <br></br>
        <a   href="https://cses.fi/problemset/" target="blank">Day 3</a><br></br>
        <a   href="https://cses.fi/problemset/" target="blank">Day 4</a><br></br>
        <a   href="https://cses.fi/problemset/" target="blank">Day 5</a><br></br>
        <a   href="https://cses.fi/problemset/" target="blank">Day 6</a><br></br>
        <a   href="https://cses.fi/problemset/" target="blank">Day 7</a> <br></br>
  
        
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