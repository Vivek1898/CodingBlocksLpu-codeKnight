import { useContext, useEffect } from "react";
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
const UserIndex = () => {
    const { state } = useContext(Context);
    const { user } = state;
    // console.log(user.user.name)
    const router = useRouter();
    useEffect(() => {
        if (user === null) router.push("/login");
    }, [user])
    return (
        <>


            {user !== null &&

                <div className="text-center ">
                    <h1 className="pt-5 text-center">User DashBoard</h1>
                    <div className="containerr">
                        <div className="cardd">
                            <div className="pic-containerr">
                                <img className="picc" src="https://source.unsplash.com/random/900%C3%97700/?avatar" alt="Profile Picture" />
                            </div>
                            <div className="namee text-danger">
                                <span>{user.name.toUpperCase()}</span>
                            </div>
                            {user.branch && user.institute &&
                            <div className="titlee">
                                <span>{`${user.institute} (${user.branch.toUpperCase()})`}</span>
                            </div>
                            }
                            <div className="titlee">
                                <span>{user.email}</span>
                            </div>
                            <div className="text-success">
                                <p>{`Contact Number: ${user.mobile}`}</p>
                            </div>
                        </div>
                    </div>


                </div>
            }
            {user === null &&

                <div className="text-center ">
                    <h1 className="pt-5 text-center text-success">Please Login</h1>
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