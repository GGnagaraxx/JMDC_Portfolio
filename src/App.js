import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/aboutMe/AboutMe";
import Home from './pages/home/Home'
import NoPage from './pages/NoPage';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-me" element={<AboutMe/>}/>
        <Route path="/projects" element={<NoPage/>}/>
        <Route path="/contact-me" element={<NoPage/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
