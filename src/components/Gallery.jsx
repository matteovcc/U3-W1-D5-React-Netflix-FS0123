import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/images.css";

class Gallery extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=bbacec44&s=harry%20potter"
      );

      if (response.ok) {
        const data = await response.json();
        this.setState({ movies: data.Search });
      } else {
        console.log("errore nel recupero dei dati");
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Container fluid className="px-3">
        <Row className="g-3">
          <h2 className="mt-5">Harry Potter</h2>
          {this.state.movies.map((film, index) => (
            <>
              <Col xs={6} md={2} key={`film-${index}`}>
                <img
                  src={film.Poster}
                  alt={film.Title}
                  className="img-fluid rounded film-card"
                  style={{
                    objectFit: "cover",
                    height: "250px",
                    width: "250px",
                    objectPosition: "top",
                  }}
                />
              </Col>
            </>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Gallery;
