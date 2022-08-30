import { Card, Container, Row, Col } from "react-bootstrap";
import mentorSatuImage from "../assets/fazztrack - card 3.jpg";

const MainContent = () => {
  return (
    <div>
      <br />

      <Container>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 7 }).map((_, idx) => (
            <Col>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={mentorSatuImage}
                  alt="mentorSatuImage"
                />
                <Card.Body>
                  <Card.Title>
                    Building Backend with NodeJS for Beginner
                  </Card.Title>
                  <Card.Text>
                    Kunjungi Website Fazztrack Untuk Info Pelatihan...
                  </Card.Text>
                  <Card.Text className="border-bottom">Level Basic</Card.Text>
                  <Card.Text>Harga Modul Gratis</Card.Text>
                </Card.Body>
              </Card>

              {/* <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card> */}
            </Col>
          ))}
        </Row>
      </Container>
      <br />
    </div>
  );
};

export default MainContent;
