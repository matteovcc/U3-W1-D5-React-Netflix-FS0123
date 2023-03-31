import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/images.css";

class ThirdGallery extends Component {
  state = {
    series: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=bbacec44&s=game%20of%20thrones"
      );

      if (response.ok) {
        const data = await response.json();
        this.setState({ series: data.Search });
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
          <h2 className="mt-5">Game of thrones</h2>
          {this.state.series.map((films, index) => (
            <>
              <Col xs={6} md={2} key={`films-${index}`}>
                <img
                  src={films.Poster}
                  alt={films.Title}
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

export default ThirdGallery;
