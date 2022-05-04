import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;