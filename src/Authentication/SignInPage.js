import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignInPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState(""); //Henry: for handleSubmit()
  const [loading, setLoading] = useState(false); //Henry: for handleSubmit()

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      let userEmail = emailRef.current.value;
      let password = passwordRef.current.value;
      let userName = userEmail.substring(0, userEmail.indexOf("@"));
      console.log("userName->" + userName); //testing
      //firebase -> createUserWithEmailAndPassword
      await createUserWithEmailAndPassword(auth, userEmail, password)
        .then((userCredential) => {
          localStorage.setItem("userEmail", userEmail);
          localStorage.setItem("userName", userName);
          //nav to home page
          window.location = "/";
        })
        .catch((error) => {
          setError(error.message);
        });
    } catch (err) {
      setError("Failed to create an account");
      console.log(err);
    }
    setLoading(false);
  }

  return (
    <div>
      <div>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "90vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                      type="password"
                      ref={passwordConfirmRef}
                      required
                    />
                  </Form.Group>
                  <Button disabled={loading} className="w-100" type="submit" style={{marginTop:"10px"}}>
                    Sign Up
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              Already have an account? <Link to="/log_in">Log In</Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
