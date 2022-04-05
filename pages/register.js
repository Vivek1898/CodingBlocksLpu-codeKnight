import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Input, Button } from 'antd';
import { Context } from "../context";
import { useRouter } from "next/router";
import { UserOutlined, LinkOutlined, BookOutlined, PhoneOutlined, LockOutlined } from '@ant-design/icons';
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [institute, setInstitute] = useState("");
  const [branch, setBranch] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { state } = useContext(Context);
  const { user } = state;
  //router
  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    //Get data to this end point
    try {
      setLoading(true);
      //If there any api exist server will target backend through proxy
      const { data } = await axios.post("https://vast-mesa-19498.herokuapp.com/api/register", {
        name,
        email,
        password,
        mobile,
        institute,
        branch
      });
      // console.log("Register  User" ,data)
      toast.success('Registration SucessFull');
      setLoading(false);
      setName('');
      setEmail('');
      setPassword('');
      router.push("/login");
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }

  };

  return (

    <>
      <h1 className="pt-5 text-center">Register</h1>

      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            className="form-control mb-4 p-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            prefix={<UserOutlined />}
            required
          />

          <Input
            type="email"
            className="form-control mb-4 p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            prefix={<LinkOutlined />}
            required
          />
          <Input
            type="text"
            className="form-control mb-4 p-3"
            value={institute}
            onChange={(e) => setInstitute(e.target.value)}
            placeholder="Enter Institute"
            prefix={<BookOutlined />}
            required
          />
          <Input
            type="text"
            className="form-control mb-4 p-3"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            placeholder="Enter branch"
            prefix={<BookOutlined />}
            required
          />
          <Input
            type="number"
            className="form-control mb-4 p-3"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter Mobile"
            prefix={<PhoneOutlined />}
            required
          />

          <Input.Password
            type="password"
            className="form-control mb-4 p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            prefix={<LockOutlined />}
            required
          />

          {!loading && <Button type="primary" htmlType="submit" style={{ width: '100%' }} shape="round" size="large"
            disabled={!name || !email || !password || loading}>Submit</Button>}
          {loading && <Button type="primary" style={{ width: '100%' }} shape="round" size="large" loading>Loading</Button>}
        </form>
        <p className="text-center p-3">
          Already registered?{" "}
          <Link href="/login">
            <a>Login</a>
          </Link>
        </p>
      </div>

    </>
  );
};

export default Register;
