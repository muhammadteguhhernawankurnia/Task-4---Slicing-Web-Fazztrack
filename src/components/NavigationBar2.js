import { Navbar, Container, Form } from "react-bootstrap";

const NavigationBar2 = () => {
  return (
    <div className="border">
      <Navbar fixed="top mt-5" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            Jelajahi modulnya dan ubah masa depanmu
          </Navbar.Brand>{" "}
          <br />
          <Form.Control
            type="search"
            placeholder="Mau belajar apa hari ini? Cari topik dan materimu disini.."
            className="me-2"
            aria-label="Search"
          />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar2;
