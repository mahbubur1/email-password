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
  const [email, setEmail] = useState("");
  // use state for password set
  const [password, setPassword] = useState("");
  // use state for requirement in email and password field
  const [validated, setValidated] = useState(false);

  // set email in email state
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  // set password in password in state
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  // handle submit button and requirement
  const handleSubmit = (event) => {
    // handle valid email and password
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
    event.preventDefault();
  };
  return (
    <div className="w-50 mx-auto mt-5">
      <h2 className="text-primary mb-3">Please Register</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Please Enter a valid Email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Password"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please Enter a valid Password.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
