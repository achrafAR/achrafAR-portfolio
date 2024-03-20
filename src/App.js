import './App.css';
import HomePage from './pages/HomePage.js';
import AboutMe from './pages/AboutMe.js';
import Services from './pages/Services.js';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer'


function App() {
  return (
    <div className="App">
      
      <HomePage/>
      <AboutMe/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
