import { Box } from '@chakra-ui/react';
import './App.css';
import { Navbar } from './Navbar_PT/Navbar';
import { Footer } from './HomePage_PT/Footer/Footer';
import { AllRoutes } from './AllRoutes/AllRoutes';
function App() {
  return (
    <Box className="App" bgColor="#0f0617" >

      <Navbar />
      <AllRoutes/>
     <Footer/>
    </Box>


  );
}

export default App;
