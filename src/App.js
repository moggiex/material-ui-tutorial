// Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import Home from './components/pages/Home';
import SearchAppBar from './components/Appbar/Appbar';
import Tour from './components/pages/Tour';
import NotFound from './components/pages/NotFound';

// import logo from './logo.svg';
import './App.css';




function App() {
  return (
    <>

      <Router>
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:tourId" element={<Tour />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
