import './App.css';
import Accordion from './Components/Accordion';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Frequently from './Components/Frequently';
import Navbar from './Components/Navbar';
import Secondsec from './Components/Secondsec';
import Secondtab from './Components/Secondtab';
import Tab from './Components/Tab';
import Thirdsec from './Components/Thirdsec';

function App() {
  return (
    <div>
      <Navbar/>
      <Tab/>
      <Secondsec/>
      <Features/>
      <Secondtab/>
      <Thirdsec/>
      <Frequently/>
      <Accordion/>
      <Footer/>
      
    </div>
  );
}

export default App;
