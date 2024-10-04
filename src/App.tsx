import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from '../src/components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.scss';
import Home from "./pages/home/Home";
import Info from "./pages/info/Info";


function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/info" element={<Info/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;