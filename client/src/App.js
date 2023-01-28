import About from './About';
import MainIntro from './MainIntro';
import Navbar from './Navbar'
import Work from './Work';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'https://kit.fontawesome.com/9c1c3f6a2e.js'
import Resume from './Resume';
import './css/App.css'
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        
        
        <Routes>
          <Route path='/' element={<><Navbar /><MainIntro /></>} />
          <Route path='/about' element={<><Navbar /><About /></>} />
          <Route path='/work' element={<><Navbar /><Work /></>} />
          <Route path='/resume' element={<><Resume /></>} />
          <Route path='/cc' element={<><Carousel /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
