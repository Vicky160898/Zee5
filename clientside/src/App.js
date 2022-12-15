import { Box } from '@chakra-ui/react';
import './App.css';
import { VideoCarousel } from './HomePage_PT/Carousel/VideoCarousel';
import { Footer } from './HomePage_PT/Footer/Footer';

import { Home } from './HomePage_PT/Home';
import { Carousel_data } from './HomePage_PT/MultiCarousel/Carousel_data';
import { Navbar } from './Navbar_PT/Navbar';
function App() {
  return (
    <Box className="App">
      {/* <Navbar />
      <VideoCarousel/> */}
   {/* <Carousel_data/> */}
   <Footer/>
    </Box>
  );
}

export default App;
