import logo from './logo.svg';
import './App.css';

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