import { Box } from '@chakra-ui/react';
import './App.css';

import { VideoCarousel } from './HomePage_PT/Carousel/VideoCarousel';
// import { Footer } from './HomePage_PT/Footer/Footer';
import FooterV from "./ComponentsPs/FooterV"


import Party from './components-ns/Party';
import SignupV from "./ComponentsPs/Signup/SignupV"
import LoginV from "./ComponentsPs/Login/LoginV"
import { Home } from './HomePage_PT/Home';
// import { Carousel_data } from './HomePage_PT/MultiCarousel/Carousel_data';
import { Navbar } from './Navbar_PT/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SignupV/>
      <LoginV/>
      <FooterV/>
    </div>
  );
}

export default App;
