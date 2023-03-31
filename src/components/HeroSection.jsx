import { Dropdown, Container, Row, Col } from "react-bootstrap";

const HeroSection = () => (
  <Container fluid className="my-3 bg-transparent px-3">
    <Row className="">
      <Col sm={12} md={8} className=" d-inline-flex align-items-center ">
        <h2>TV Shows</h2>
        <Dropdown className="ms-3">
          <Dropdown.Toggle variant="dark" className="dropdown-toggle">
            Genres
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark">
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Thriller</Dropdown.Item>
            <Dropdown.Item href="#">Horror</Dropdown.Item>
            <Dropdown.Item href="#">Documentaries</Dropdown.Item>
            <Dropdown.Item href="#">True Crimes</Dropdown.Item>
            <Dropdown.Item href="#">Family</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col sm={12} md={4} className="d-flex justify-content-end align-items-center ">
        <span className="d-flex align-items-center border rounded-1 p-2 me-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
            />
            <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
            <path
              fillRule="evenodd"
              d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
            />
          </svg>
        </span>
        <span className="d-flex align-items-center border rounded-1 p-2 me-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
        </span>
      </Col>
    </Row>
  </Container>
);

export default HeroSection;
