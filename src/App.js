// --- IMPORTS ---
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stylesheets/app.css';
import NavigationBar from './Components/NavigationBar';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

// --- MAIN APP COMPONENT ---
class App extends React.Component {
  render() {
    return(
      <div className="App">
        <NavigationBar />
        <About />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
