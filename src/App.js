import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home.js';
import About from './routes/About.js';
import Projects from './routes/Projects.js';
import Contact from './routes/Contact.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;


