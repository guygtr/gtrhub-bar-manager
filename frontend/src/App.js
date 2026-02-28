import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StockTracker from './pages/StockTracker';
import RecipeManager from './pages/RecipeManager';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>GTRHub Bar Manager</h1>
        </header>
        <Routes>
          <Route path="/stock" element={<StockTracker />} />
          <Route path="/recipes" element={<RecipeManager />} />
          <Route path="/" element={<div>Welcome! Navigate to /stock or /recipes</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
