import './App.css';
import HomePage from './pages/HomePage.js';
import AboutMe from './pages/AboutMe.js';
import Services from './pages/Services.js';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <AboutMe/>
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
