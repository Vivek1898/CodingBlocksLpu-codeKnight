import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import { UserOutlined, LockOutlined, IdcardOutlined } from '@ant-design/icons';
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";
import { Input } from 'antd';
import { Button } from 'antd';

const ForgotPassword = () => {
  // state
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // context
  const {
    state: { user },
  } = useContext(Context);
  // router
  const router = useRouter();

  // redirect if user is logged in
  useEffect(() => {

    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("https://vast-mesa-19498.herokuapp.com/api/forgot-password", { email });
      setSuccess(true);
      toast("Check your email for the secret code");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // console.log(email, code, newPassword);
    // return;
    try {
      setLoading(true);
      const { data } = await axios.post("https://vast-mesa-19498.herokuapp.com/api/reset-password", {
        email,
        code,
        newPassword,
      });
      setEmail("");
      setCode("");
      setNewPassword("");
      setLoading(false);
      toast("Great! Now you can login with your new password");
      router.push("/login");
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  return (
    <>
      <h1 className="pt-5 text-center">
        Forgot Password
      </h1>

      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={success ? handleResetPassword : handleSubmit}>
          <Input
            type="email"
            className="form-control mb-4 p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            prefix={<UserOutlined />}
            required
          />
          {success && (
            <>
              <Input
                type="text"
                className="form-control mb-4 p-3"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter secret code"
                prefix={<IdcardOutlined />}
                required
              />

              <Input.Password
                type="password"
                className="form-control mb-4 p-3"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
                prefix={<LockOutlined />}
                required
              />
              <h6 className="text-primary">Also Check Spam For email </h6>
            </>

          )}

          <Button
            type="primary"
            htmlType="submit" style={{ width: '100%' }} shape="round" size="large"
            disabled={loading || !email}
          >
            {loading ? <SyncOutlined spin /> : "Submit"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
