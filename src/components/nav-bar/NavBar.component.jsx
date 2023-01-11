import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import cmat from './cmat-logos_transparent.png';

const NavBar = () => {
  return (
    <Navbar
      bg="white"
      expand="lg"
      style={{
        boxShadow: "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)",
      }}
    >
      <Container>
        <Navbar.Brand href="#home"><img src={cmat} height='25px'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="My Dashboard"
              id="basic-nav-dropdown"
              style={{ marginRight: "12px" }}
            >
              <NavDropdown.Item href="/myrequests/open">
                Open Requests
              </NavDropdown.Item>
              <NavDropdown.Item href="/myrequests/create">
                Create Request
              </NavDropdown.Item>
              <NavDropdown.Item href="/myrequests/history">
                Request History
              </NavDropdown.Item>
              <NavDropdown.Item href="/myclients">
                Manage Clients
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/dashboard">Home</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/waiver-wire">Pick Up Coverage</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav >
            <Nav.Link href="/sign-in">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
