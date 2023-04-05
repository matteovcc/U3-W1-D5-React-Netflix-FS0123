import { Component } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import "../assets/images.css";

import SingleMovie from "./SingleMovie";

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
    return (
      <Container fluid className="px-3">
        <Row className="g-3">
          <h2 className="mt-5">{this.props.title}</h2>
          {this.state.isLoading && !this.state.error && (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          {this.state.movies.map((film, index) => (
            <Col xs={6} md={3} lg={2} key={`films-${index}`}>
              <SingleMovie title={film.title} img={film.Poster} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Gallery;
