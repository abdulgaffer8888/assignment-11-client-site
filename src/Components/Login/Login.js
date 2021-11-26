import { useLocation, useHistory } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import useAuth from "../../context/useAuth";
import "./Login.css";
const Login = () => {
  const {createAcount,error,SignInEmailPassword,signInUsingGoogle}=useAuth()
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [name, setname] = useState('')
  const [isLogin, setIsLogin] = useState(false)
  ///redirect from login page
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/';
  const handleGoogleLogin = () => {
    signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
}
const goWantpath=()=>{
  history.push(redirect_uri);
}
  const RegisterHandle=(e)=>{
    e.preventDefault();
    if (isLogin) {
      SignInEmailPassword(email, password);
      goWantpath()
    }
    else {
      createAcount(email, password);
      console.log("create account")
    }
  }
  const toggleLogin = e => {
    setIsLogin(e.target.checked)
  }
  const handleEmailChange = e => {
    setEmail(e.target.value)
  }
  const handleNameChange = e => {
    setname(e.target.value)
  }
  const passwordChange = e => {
    setpassword(e.target.value)
  }
  return (
    <div className="login-form">
      <Form onSubmit={RegisterHandle}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {!isLogin &&  <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>Name</Form.Label>
          <Form.Control onBlur={handleNameChange} type="text" placeholder="Name" />
        </Form.Group>

        }
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={passwordChange} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onBlur={toggleLogin} type="checkbox" label="Are You Register" />
        </Form.Group>
        <Button variant="primary" type="submit">
        {isLogin ? 'Login' : 'Register'}
        </Button>
        <br />
        <p>------or-------</p>
        <Button variant="primary" onClick={handleGoogleLogin}>login with google</Button>
        <p>{error}</p>
      </Form>
    </div>
  );
};

export default Login;
