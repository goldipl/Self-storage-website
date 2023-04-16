import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Topbar from './components/Topbar/Topbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  AOS.init();

  return (
    <div className="App">
      <Topbar />
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
