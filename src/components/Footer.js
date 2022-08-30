import { Row, Col } from "react-bootstrap";
import fazztrackLogo from "../assets/fazztrack - logo.jpg";

const Footer = () => {
  return (
    <div>
      <div className="container text-md-left">
        <div className="row">
          <div className="col-md-4 mt-md-0 mt-3">
            <img
              alt=""
              src={fazztrackLogo}
              width="40%"
              height="12%"
              className="d-inline-block align-top"
            />
            <p>
              Fazztrack adalah program pelatihan yang berkomitmen untuk mencetak
              developer yang profesional dan memberikan kesempatan untuk
              berkarir di perusahaan ternama.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-2 mb-md-0 mb-2">
            <h5 className="text">Kelas</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Fullstack Mobile
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Fullstack Website
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Backend Javaspring
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Backend Golang
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Lihat Semua
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Lihat Semua
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-md-0 mb-2">
            <h5 className="text">Dukungan</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Cicil Setelah Kerja (ISA)
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Career Ready
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Hire Our Graduates
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-md-0 mb-2">
            <h5 className="text">Tentang</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Cerita Alumni
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Sekilas Fazztrack
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-md-0 mb-2">
            <h5 className="text">Sosial Media</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-bottom"></div>
        <Row>
          <Col>
            <div className="">© 2022 Fazztrack. All Right Reserved</div>
          </Col>
          <Col>
            <div className="">telephone: +6281132010888</div>
          </Col>
          <Col>
            <div className="">email: hello@fazztrack.com</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
