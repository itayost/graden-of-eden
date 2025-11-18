import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">Garden of Eden</Link>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/privacy" className="nav-link">Privacy Policy</Link>
              </li>
              <li className="nav-item">
                <Link to="/terms" className="nav-link">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2024 Garden of Eden. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
