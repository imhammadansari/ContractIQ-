import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to="/home" /> } />
        <Route path='/home' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
