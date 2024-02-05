import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="success" className="fixed-top">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className="text-decoration-none text-white me-5">
              <Button variant="success">Home</Button>
            </Link>
            <Link to="/fav" className="text-decoration-none text-white">
              <Button variant="success">Favoritos</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
