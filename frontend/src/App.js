import React from 'react';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Resume from "./pages/resume/resume";
import Projects from "./pages/projects/projects";
import Navbar from "./components/navbar"



function App() {
  return (
    <>
    
      <Router >
          <div>
          <Navbar/>
            
            <Routes>
                <Route exact path='/' element={ <Home />} />
                <Route exact path='/about' element={ <About />} />
                <Route exact path='/contact' element={ <Contact />} />
                <Route exact path='/resume' element={ <Resume />} />
                <Route exact path='/projects' element={ <Projects/>} />
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
