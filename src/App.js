import React, {useState} from 'react';
import './App.css';
import Navigation from './comps/navi';
import About from './comps/about';
import Portfolio from './comps/portfolio';
import Contact from './comps/contact';
import Resume from './comps/resume';
import Footer from './comps/foot';

function App() {
  const [currentDisp, setCurrentDisp] = useState("About");

  const renderDisp = () => {
    switch (currentDisp) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
      <Navigation currentDisp = {currentDisp} setCurrentDisp = {setCurrentDisp} />

      <main>
        {renderDisp(currentDisp)}
      </main>

      <Footer />
    </div>
  );
}

export default App;