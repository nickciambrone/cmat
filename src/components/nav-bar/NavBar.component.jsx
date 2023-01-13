import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import cmat from './cmat-logos_transparent.png';
import { UserContext } from '../../contexts/user.context';
import { useContext } from "react";
import {signOutUser} from '../../firebase/firebase.utils'

const NavBar = () => {
  const {currentUser} = useContext(UserContext)
  
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
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
        {currentUser ?  <Nav className="me-auto">
        <NavDropdown
          title="My Dashboard"
          id="basic-nav-dropdown"
          style={{ marginRight: "12px" }}
        >
          <NavDropdown.Item href="/dashboard/open">
            My Open Requests
          </NavDropdown.Item>
          <NavDropdown.Item href="/dashboard/create">
            Create Request
          </NavDropdown.Item>
          <NavDropdown.Item href="/dashboard/history">
            Request History
          </NavDropdown.Item>
          <NavDropdown.Item href="/dashboard/myclients">
            Manage Clients
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/dashboard/home">Home</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/waiver-wire">Pick Up Coverage</Nav.Link>
      </Nav> :  <Nav className="me-auto">
     
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>}
         
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav >
          {currentUser ? <Nav.Link  onClick = {signOutUser}>Sign Out</Nav.Link>
:             <Nav.Link href="/sign-in">Sign In</Nav.Link>
}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div style={{textAlign:'right', marginRight:'15px'}}>
    <span >Signed in as: {currentUser ? currentUser['email'] : ''}</span>

    </div>
    </div>
  );
};

export default NavBar;
