import { useContext, useEffect } from "react";
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

const bgcolor = ['#FF5733',
    '#3F1DFC',
    '#F5D033',
    '#E5BE01',
    '#FFA420',
    '#D98CE3',
    '#B49840']

function randomInteger() {
    return Math.floor(Math.random() * (7));
}

const Code = () => {
    const { state } = useContext(Context);
    const { user } = state;
    const router = useRouter();
    useEffect(() => {
        if (user === null) router.push("/login");
    }, [user])
    return (
        <>
            {user !== null &&
                <div className="headcontainer">
                    <div className="cardcomp">
                        <div className="logoimg">
                            <img src="https://raw.githubusercontent.com/akshat881/codingN/main/jet.png" />
                        </div>
                        <div className="wrapper">
                            <div className="card" style={{ backgroundColor: bgcolor[randomInteger()] }}>
                                <h3 className="card-title">DAY 1</h3>
                                <button className="card-btn">START CODING</button>
                            </div>
                            <div className="card" style={{ backgroundColor: bgcolor[randomInteger()] }}>
                                <h3 className="card-title">DAY 2</h3>
                                <button className="card-btn">START CODING</button>
                            </div>
                            <div className="card" style={{ backgroundColor: bgcolor[randomInteger()] }}>
                                <h3 className="card-title">DAY 3</h3>
                                <button className="card-btn">START CODING</button>
                            </div>
                            <div className="card" style={{ backgroundColor: bgcolor[randomInteger()] }}>
                                <h3 className="card-title">DAY 4</h3>
                                <button className="card-btn">START CODING</button>
                            </div>
                            <div className="card" style={{ backgroundColor: bgcolor[randomInteger()] }}>
                                <h3 className="card-title">DAY 5</h3>
                                <button className="card-btn">START CODING</button>
                            </div>
                            <div className="card" style={{ backgroundColor: bgcolor[randomInteger()] }}>
                                <h3 className="card-title">DAY 6</h3>
                                <button className="card-btn">START CODING</button>
                            </div>
                            <div className="card" style={{ backgroundColor: bgcolor[randomInteger()] }}>
                                <h3 className="card-title">DAY 7</h3>
                                <button className="card-btn">START CODING</button>
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

        </>
    )
};

export default Code;