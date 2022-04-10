import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { logOut } from "../Authentication/firebase";

export default function Header() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState(null);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [currentAlgorithm, setCurrentAlgorithm] = React.useState(
    localStorage.getItem("selectedAlgorithm")
  );

  const prettyPrint = (str) => {
    switch (str) {
      case "ms":
        return "Merge Sort";
      case "bs":
        return "Bubble Sort";
      default:
        return "Not Valid Selection";
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem("selectedAlgorithm") !== currentAlgorithm) {
      window.location.reload();
    }
    if (localStorage.getItem("selectedAlgorithm") === null) {
      localStorage.setItem("selectedAlgorithm", "ms");
    } else {
      localStorage.setItem("selectedAlgorithm", currentAlgorithm);
    }
  }, [currentAlgorithm]);

  React.useEffect(() => {
    if (localStorage.getItem("userEmail") !== null) {
      setIsSignedIn(true);
      setUserEmail(localStorage.getItem("userEmail"));
    }
    if (userEmail === "admin@123.com") {
      setIsAdmin(true);
    }
  }, [isSignedIn]);

  return (
    <div className="Header">
      <Navbar className="header-container" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Sorting Algorithms Playground</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Select a Algorithm" id="header-dropdown">
                <NavDropdown.Item id="header-dropdown-item" onClick={() => setCurrentAlgorithm("ms")}>
                  Merge Sort
                </NavDropdown.Item>
                <NavDropdown.Item id="header-dropdown-item" onClick={() => setCurrentAlgorithm("bs")}>
                  Bubble Sort
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Select a Level" id="header-dropdown">
                <NavDropdown.Item id="header-dropdown-item" href="/level1">
                  Level1 (Instruction)
                </NavDropdown.Item>
                <NavDropdown.Item id="header-dropdown-item" href="/level2">Level2</NavDropdown.Item>
                <NavDropdown.Item id="header-dropdown-item" href="/level3">Level3</NavDropdown.Item>
                <NavDropdown.Item id="header-dropdown-item" href="/level4">Level4</NavDropdown.Item>
                <NavDropdown.Item id="header-dropdown-item" href="/level5">Level5</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item id="header-dropdown-item" href="/customLevel">
                  Custom Level
                </NavDropdown.Item>
              </NavDropdown>

              {isSignedIn ? (
                <NavDropdown title="More" id="header-dropdown">
                  {isSignedIn ? (
                    <NavDropdown.Item id="header-dropdown-item" href="/PlayerViewRecordPage">
                      View Game Records
                    </NavDropdown.Item>
                  ) : (
                    ""
                  )}
                  {isAdmin ? (
                    <NavDropdown.Item href="/admin_page">
                      Admin Page
                    </NavDropdown.Item>
                  ) : (
                    ""
                  )}
                </NavDropdown>
              ) : (
                ""
              )}
              <Navbar.Text style={{ marginLeft: "10px", color: "white" }}>
                Selected Algorithm:{" "}
                <strong id='selected-algorithm'>{prettyPrint(currentAlgorithm)}</strong>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <PersonIcon style={{ color: "white", marginRight: "5px" }} />
            <Navbar.Text style={{ color: "White", marginRight: "10px" }}>
              {isSignedIn ? <div>Signed in as: <strong>{userEmail}</strong></div> : <div></div>}
            </Navbar.Text>
            <Button
              style={{ color: "#e85d04", fontWeight:"bold"}}
              variant="light"
              onClick={isSignedIn ? logOut : null}
              href={isSignedIn ? "/" : "sign_in"}
            >
              {isSignedIn ? "Logout" : "Login"}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
