import './App.css';

import { Home } from './HomePage_PT/Home';
import { Navbar } from './Navbar_PT/Navbar';
import FooterV from "./ComponentsPs/FooterV";
import SignupV from "../src/ComponentsPs/Signup/SignupV"
import LoginV from "../src/ComponentsPs/Login/LoginV"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <FooterV/>
      <SignupV />
      <LoginV />
    

    </div>
  );
}

export default App;
