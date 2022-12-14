import './App.css';
import { Admin } from './component-vh/Admin';
import { Home } from './HomePage_PT/Home';
import { Navbar } from './Navbar_PT/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
     <Admin/>

    </div>
  );
}

export default App;
