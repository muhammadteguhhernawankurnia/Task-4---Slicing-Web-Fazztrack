import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import fazztrackLogo from "../assets/fazztrack - logo.jpg";

const NavigationBar = () => {
  return (
    <div className="">
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={fazztrackLogo}
              width="50%"
              height="50%"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown
                className="fs-6 fw-bold"
                title="Kelas"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">lorem</NavDropdown.Item>
                <NavDropdown.Item href="#action4">lorem</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                className="fs-6 fw-bold"
                title="Dukungan"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">lorem</NavDropdown.Item>
                <NavDropdown.Item href="#action4">lorem</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                className="fs-6 fw-bold"
                title="Tentang"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">lorem</NavDropdown.Item>
                <NavDropdown.Item href="#action4">lorem</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="fs-6 fw-bold" href="#action1">
                Hire Our Graduates
              </Nav.Link>
            </Nav>

            <Form className="">
              <Button variant="outline-dark">Masuk</Button>{" "}
              <Button variant="primary">Daftar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
