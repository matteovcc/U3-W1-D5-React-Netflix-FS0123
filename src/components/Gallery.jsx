// import {Component} from "react"
// import{Container,Row} from "react-bootstrap"

// class Gallery extends Component {
//     fetchFilms = async () =>{
//         try{
//             const response = await fetch("http://www.omdbapi.com/?apikey=bbacec44&s=harry%20potter")

//             if(response.ok){
//                 const data = await response.json()
//                 console.log(data)
//             }else{
//                 console.log("error")
//             }
//         }catch(error){
//             alert(error)
//         }
//     }

//     componentDidMount = () => {
//         console.log("component did mount")
//         this.fetchFilms()
//     }

//     render(){
//         return(
//             <Container className="mt-5">
//                 <h2 className="text-start">
//                     Film
//                 </h2>
//                 <Row>
//                     {/* {data.map((film,index) => (
//                         <Col md={2} key={`data-${index}`}><img src={film.poster} alt="" /></Col>
//                     ))
                        
//                     } */}
//                 </Row>
//             </Container>
//         )
//     }
// }

import {Component} from "react"
import {Container,Row,Col} from "react-bootstrap"

class Gallery extends Component {
    state = {
      films: []
    };
  
    async componentDidMount() {
      try {
        const response = await fetch("http://www.omdbapi.com/?apikey=bbacec44&s=harry%20potter");
  
        if (response.ok) {
          const data = await response.json();
          this.setState({ films: data.Search });
        } else {
          console.log("error");
        }
      } catch (error) {
        alert(error);
      }
    }
  
    render() {
      return (
        <Container fluid className="px-3">
        <Row className="g-1">
          {this.state.films.map((film) => (
              <Col md={2}  key={film.imdbID} className="me-0" >
              <img src={film.Poster} alt={film.Title}  style = {{width:"224px", height:"126px"}}/>
            </Col>
          ))}
        </Row>
          </Container>
      );
    }
  }
  

export default Gallery