
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import HowBuy from './components/HowBuy';
import Tokenomics from './components/Tokenomics';

function App() {
  return (
    <div className='bg-light-sky'>
      <Header />
      <About />
      <HowBuy />
      <Tokenomics/>
      <Contact />

    </div>
  );
}

export default App;
