import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Garden of Eden</h1>
        <p className="hero-subtitle">Your peaceful digital sanctuary</p>
      </div>

      <div className="legal-links-section">
        <h2>Legal Information</h2>
        <p>Please review our legal documents to understand how we operate and protect your rights.</p>

        <div className="cards-container">
          <Link to="/privacy" className="legal-card">
            <div className="card-icon">🔒</div>
            <h3>Privacy Policy</h3>
            <p>Learn how we collect, use, and protect your personal information.</p>
            <span className="read-more">Read more →</span>
          </Link>

          <Link to="/terms" className="legal-card">
            <div className="card-icon">📜</div>
            <h3>Terms of Service</h3>
            <p>Understand the terms and conditions for using our services.</p>
            <span className="read-more">Read more →</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
