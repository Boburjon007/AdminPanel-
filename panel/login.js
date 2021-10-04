import React from 'react'
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { G31_TOKEN, URL } from '../constants/index'
const formlayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const Login = () => {
  const onFinish = ( values ) => {
   axios.post(URL + "auth/signin", values).then((res) => {
     console.log(res);
   });
   localStorage.setItem(G31_TOKEN , "thisistoken")
   window.location('/dashboard')
  };

  const onFinishFailed = ( errorInfo ) => {
    console.log( 'Failed:', errorInfo );
  };
  
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <Form {...formlayout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[ { required: true, message: 'Please input your username!' } ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[ { required: true, message: 'Please input your password!' } ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item  className='float-right'>
          <Button type="primary" htmlType="submit" >
           Login
          </Button>
        </Form.Item>
      </Form>
    </div> )
}

export default Login
