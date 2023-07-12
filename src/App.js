import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import Topbar from './components/Signintopbar';
import {Home} from './components/Home';
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
