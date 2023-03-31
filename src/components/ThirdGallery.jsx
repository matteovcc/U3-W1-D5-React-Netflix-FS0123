import { Component } from "react";
import { Container, Row, Col,Spinner } from "react-bootstrap";
import "../assets/images.css";

class ThirdGallery extends Component {
  state = {
    series: [],
    isLoading:true
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=bbacec44&s=game%20of%20thrones"
      );

      if (response.ok) {
        const data = await response.json();
        this.setState({ series: data.Search , isLoading:false});
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
          {this.state.isLoading && !this.state.error && (
            <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status" >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

            </div>
                    )}
          {this.state.series.map((films, index) => (
            
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
            
          ))}
        </Row>
      </Container>
    );
  }
}

export default ThirdGallery;
