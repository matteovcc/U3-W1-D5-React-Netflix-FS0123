import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import HeroSection from "./components/HeroSection";
import Gallery from "./components/Gallery";
import MyFooter from "./components/MyFooter";
import SecondGallery from "./components/SecondGallery";
import ThirdGallery from "./components/ThirdGallery";
// import Profile from "./components/Profile";

function App() {
  return (
    <>
      <MyNav />
      <HeroSection />
      <Gallery title="Harry Potter" />
      <SecondGallery title="Lord of the rings" />
      <ThirdGallery title="Game Of Thrones"/>
      <MyFooter />
      {/* <Profile/> */}
    </>
  );
}

export default App;
