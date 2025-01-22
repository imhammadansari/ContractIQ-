import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to="/home" /> } />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
