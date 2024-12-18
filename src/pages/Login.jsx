import React, { useState } from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/utiltes/firbase';


const { Title, Text } = Typography

const Login = () => {

const navigate = useNavigate()
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
 
const handleLogin = async () => {
  try{
    await signInWithEmailAndPassword(auth,email,password)
    navigate('/')
  }catch(error){
    console.log(error);
    
  }
}

 const moveToSignUp = () => {
  navigate('/SignUp')
 }
  return (
    <div className="flex justify-center py-20 items-center h-min-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-3 md:p-10 w-full max-w-md">
        {/* Title */}
        <Title level={3} className="text-center mb-4">
           LogIn
        </Title>

        <Form
          name="signup-form"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          className="w-full"
        >
          {/* Email Input */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please enter your email!',
              },
            ]}
          >
            <Input
             placeholder="Enter your email" 
             value={email}
            onChange={(e) => setEmail(e.target.value)}
             />
          </Form.Item>
          {/* Password Input */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please enter your password!',
              },
            ]}
          >
            <Input.Password
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          {/* Sign Up Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
             onClick={handleLogin}
            >
              Login
            </Button>
          </Form.Item>

          {/* Already have an account? */}
          <div className="text-center mb-3">
            <Text>Don't have an account ?</Text>
          </div>

          {/* Login Button */}
          <Form.Item>
           
            <Button
              type="default"
              htmlType="button"
              className="w-full mb-3"
              onClick={moveToSignUp}
              >
              Sign Up
            </Button>
            
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
