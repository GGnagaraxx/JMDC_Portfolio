import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/JMDC_Portfolio/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about-me" element={<NoPage/>}/>
          <Route path="projects" element={<NoPage/>}/>
          <Route path="contact-me" element={<NoPage/>}/>
          <Route path="*" element={<NoPage/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
