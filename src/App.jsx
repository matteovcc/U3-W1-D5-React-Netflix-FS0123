import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyNav from "./components/MyNav";
import HeroSection from "./components/HeroSection";
import Gallery from "./components/Gallery";
import MyFooter from "./components/MyFooter";
import SecondGallery from "./components/SecondGallery";
import ThirdGallery from "./components/ThirdGallery";



function App() {
  return (
    <>
    <MyNav />
    <HeroSection/>
    <Gallery />
    <SecondGallery/>
    <ThirdGallery />
    <MyFooter/>
    </>
  );
}

export default App;
