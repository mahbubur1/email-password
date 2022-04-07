
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "./Firebase.init";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./App.css";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  //use state for email set 
  const [email, setEmail] = useState('');
  // use state for password set 
  const [password, setPassword] = useState('');

const handleEmailBlur = (event) => {
  setEmail(event.target.value);
};
const handlePasswordBlur = (event) => {
  setPassword(event.target.value);
};
const handleSubmit = (event) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then(result =>{
    const user = result.user;
    console.log(user);
  })
  .catch(error =>{
    console.error(error);
  })
  event.preventDefault();
};
  return (
    <div className="w-50 mx-auto mt-5"> 
      <h2 className="text-primary mb-3">Please Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
