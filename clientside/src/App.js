import { Box } from '@chakra-ui/react';
import './App.css';
import { Navbar } from './Navbar_PT/Navbar';
import { Footer } from './HomePage_PT/Footer/Footer';
import { AllRoutes } from './AllRoutes/AllRoutes';
<<<<<<< HEAD
import Login from './ComponentsPs/Login/LoginV';
=======
import { Data } from './component-vh/Data';
>>>>>>> 4577390fb65c97d9c3b567366dd981a106526175
function App() {
  return (
    <Box className="App" bgColor="#0f0617" >
      <Navbar />
<<<<<<< HEAD
      <AllRoutes/>
     <Footer/>
     {/* <Login/> */}
=======
      <AllRoutes />
      <Footer />
>>>>>>> 4577390fb65c97d9c3b567366dd981a106526175
    </Box>
  );
}

export default App;
