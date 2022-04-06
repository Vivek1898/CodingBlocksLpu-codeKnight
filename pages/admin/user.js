

import { useContext, useState, useEffect } from "react";
import { Context } from "../../context";
import { Table } from 'antd';
import Link from "next/link";
import { Row, Col } from 'antd';


import {
  SettingOutlined,
  UserSwitchOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import { Spin } from 'antd';
import { Button } from "antd";
import Text from "antd/lib/typography/Text";
import { useRouter } from "next/router";
import axios from "axios";
import { Layout } from 'antd';
import { CSVLink, CSVDownload } from "react-csv";





const Code = () => {
  const [students, setStudents] = useState([]);
  const [columns, setColums] = useState([]);
  const [data, setData] = useState([]);
  const { Header, Footer, Sider, Content } = Layout;
  const [loading, setLoading] = useState(false);
  const [length, setLength] = useState("");
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  function getstudents() {
    // https://reststudents.com/v3.1/all
    setLoading(true);
    
    axios.get(`${process.env.NEXT_PUBLIC_ADMIN_USER}/employees`).then((sucess) => {
      setStudents(sucess.data);
      setLength("Total Students :  " + sucess.data.length)
      setLoading(false);


    }, (err) => {
      console.log(err)
    })
  }

  const { state } = useContext(Context);
  const { user } = state;
  const router = useRouter();
  useEffect(() => {
    if (user === null) router.push("/login");
  }, [user])

  useEffect(() => {
    if (students.length > 0) {
      setColums([
        {
          title: 'Index',
          dataIndex: 'index',
          key: 'index',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Institute',
          dataIndex: 'institute',
          key: 'institute',
        },
        {
          title: 'Branch',
          dataIndex: 'branch',
          key: 'branch',
        },
        {
          title: 'Mobile',
          dataIndex: 'mobile',
          key: 'mobile',
        }
      ])
      let keyIndex = 0;
      const sdata = students.map((data, index) => {
        keyIndex++;
        return {
          key: keyIndex,
          index: index + 1,
          name: data.name,
          email: data.email,
          institute: data.institute,
          branch: data.branch,
          mobile: data.mobile,
        }
      });

      setData(sdata);
    }
  }, [students])
  return (
    <>
      {user !== null && user.role.includes("Instructor") &&
        <>
          <h1 className="pt-5 text-center">All User Details</h1>
         <h4 className="text-center text-success"> {length}</h4>
          <Row justify="space-around">
            <Col className='gutter-row' span={6}><Button style={{ width: '100%' }} loading={loading ? true : false} type="primary" size="large" onClick={getstudents}> {students.length === 0 ? 'Get Data' : 'Refresh'} </Button></Col>
            {students.length > 0 && <Col span={6}><Button style={{ width: '100%' }} className="text-center" type='primary' size="large"><CSVLink data={data}>Download</CSVLink></Button></Col>}
            
          </Row>
          <br />
          {loading && <Spin indicator={antIcon} tip={'Loading...'}><Table columns={columns} dataSource={data} /> </Spin>}
          {!loading && <Table pagination={false} columns={columns} dataSource={data} scroll={{ y: 400 }} />}
          <br />
        </>
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