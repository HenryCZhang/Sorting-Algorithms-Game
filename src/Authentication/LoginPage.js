import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useAlert } from "react-alert";

export default function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(""); //Henry: for handleSubmit()
  const [loading, setLoading] = useState(false); //Henry: for handleSubmit()
  const alert = useAlert(); //Henry: fancy alert

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    let userEmail = emailRef.current.value;
    let password = passwordRef.current.value;
    let userName = userEmail.substring(0, userEmail.indexOf("@"));
    console.log("userName->" + userName); //testing

    //firebase -> signInWithEmailAndPassword
    await signInWithEmailAndPassword(auth, userEmail, password)
      .then((userCredential) => {
        localStorage.setItem("userEmail", userEmail);
        localStorage.setItem("userName", userName);
        //if login as admin -> nav to admin page
        if (userCredential.user.email === "admin@123.com") {
          window.location = "/admin_page";
        } else {
          //if login as player -> nav to home page
          window.location = "/";
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });

    setLoading(false);
  }

  async function resetPassword() {
    let userEmail = emailRef.current.value;
    //forget password? -> send reset password email
    await sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        // Password reset email sent!
        alert.show(`We sent an email to ${userEmail} to reset your password.`, {
          timeout: 3000
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert.error(errorMessage, { timeout: 3000 });
      });
  }

  return (
    <div>
      <div>
        <Container
          className={"d-flex align-items-center justify-content-center"}
          style={{ minHeight: "90vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Welcome Back!</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleLogin}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      ref={emailRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      ref={passwordRef}
                      required
                    />
                  </Form.Group>
                  <div className="w-100 text-center mt-2">
                    Forget password?{" "}
                    <Link to="#" onClick={resetPassword}>
                      Send me an email to reset
                    </Link>
                  </div>
                  <Button
                    disabled={loading}
                    className="w-100"
                    type="submit"
                    style={{ marginTop: "10px" }}
                  >
                    Log In
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2" >
              Don't have an account? <Link to="/sign_in">Sign Up</Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
