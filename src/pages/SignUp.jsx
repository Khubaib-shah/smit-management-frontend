import  { useState } from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/utiltes/firbase';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;


const SignUpForm = () => {
  let [userName, setUserName] = useState("")
  let [email, setEmail] = useState("")
  let [password,setPassword] = useState("")
  const navigate = useNavigate()
const handleWithGoogle = () => {
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    navigate('/')
    
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);  
});
}
const handleSignup = async () => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    console.log("user in Signup=>", user);
      console.log("email", email);
      console.log("password", password);
      navigate('/Login')
      
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error=>",errorCode,errorMessage );
    });
    
  }
  const moveToLogin = () => {
    navigate('/Login')
  }

  return (
    <div className="flex justify-center py-4 items-center h-min-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-3 md:p-10 w-full max-w-md">
        {/* Title */}
        <Title level={3} className="text-center mb-2">
          Sign Up
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
            <Input placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             />
            
          </Form.Item>

          {/* Username Input */}
          <Form.Item
            label="Username"
            name="userName"
            rules={[
              {
                required: true,
                message: 'Please enter your username!',
              },
            ]}
          >
            <Input placeholder="Enter your username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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
            <Input.Password placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
            />
          </Form.Item>

          {/* Sign Up Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full mb-1"
              onClick={handleSignup}
            >
              Sign Up
            </Button>
          </Form.Item>

          {/* Already have an account? */}
          <div className="text-center ">
            <Text>Already have an account?</Text>
          </div>

          {/* Login Button */}
          <Form.Item>
            <Button
              type="default"
              htmlType="button"
              className="w-full mb-1"
              onClick={moveToLogin}
            >
              Login
            </Button>
          </Form.Item>

          {/* Sign Up with Google Button */}
          <Form.Item>
            <Button
              icon={<GoogleOutlined />}
              type="default"
              htmlType="button"
              className="w-full"
              onClick={handleWithGoogle}
            >
              Sign Up with Google
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
