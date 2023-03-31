import { Component } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import "../assets/images.css";

class Gallery extends Component {
  state = {
    movies: [],
    isLoading: true,
    // selected:false
  };

  //   handleChange = () =>{
  //     this.setState({selected: !this.state.selected})
  //   }
  async componentDidMount() {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=bbacec44&s=harry%20potter"
      );

      if (response.ok) {
        const data = await response.json();
        this.setState({ movies: data.Search, isLoading: false });
      } else {
        console.log("errore nel recupero dei dati");
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    // let imageStyle;
    // if (this.state.selected === true) {
    //     imageStyle = {
    //       border: "1px solid white"
    //     }
    //   } else {
    //     imageStyle = { border: "none" }
    //   }

    return (
      <Container fluid className="px-3">
        <Row className="g-3">
          <h2 className="mt-5">Harry Potter</h2>
          {this.state.isLoading && !this.state.error && (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          {this.state.movies.map((film, index) => (
            <Col xs={6} md={2} key={`films-${index}`}>
              {/* style={imageStyle} onClick={this.handleChange} */}

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
          ))}
        </Row>
      </Container>
    );
  }
}

export default Gallery;

//sopra volevo rendere il bordo bianco al click della col o dell'immagine,
//ci sono riuscito ma siccome è brutto lo lascio commentato
//inoltre siccome non ho creato un componente figlio per i film
// all'evento del click  tutte le immagini  si colorano di bianco per via del map
