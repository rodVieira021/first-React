import Navigation from './pages/Navigation';
import './styles/styling.css';
import Main from './pages/Main';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <div className="App">
          <Navigation />
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </div>
      </Routes>
    </Router>
  );
}

export default App;
