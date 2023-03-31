import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyNav from "./components/MyNav";
import HeroSection from "./components/HeroSection";
import Gallery from "./components/Gallery";
import MyFooter from "./components/MyFooter";



function App() {
  return (
    <>
    <MyNav />
    <HeroSection/>
    <Gallery />
    <MyFooter/>
    </>
  );
}

export default App;
