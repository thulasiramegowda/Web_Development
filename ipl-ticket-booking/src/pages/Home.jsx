
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">THE BIGGEST CRICKET EXPERIENCE</span>

          <h1>
            Feel The <span>Fever.</span>
            <br />
            Live The Game.
          </h1>

          <p>
            Experience the excitement of IPL cricket.
            Discover upcoming matches and book your
            seats for unforgettable moments.
          </p>

          <div className="hero-buttons">
            <button onClick={() => navigate("/matches")}>
              Explore Matches →
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/booking")}
            >
              Book Tickets
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <h2>10+</h2>
              <p>Teams</p>
            </div>
            <div>
              <h2>70+</h2>
              <p>Matches</p>
            </div>
            <div>
              <h2>1</h2>
              <p>Passion</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-circle circle-one"></div>
          <div className="floating-circle circle-two"></div>
          <div className="cricket-ball">🏏</div>
          <div className="floating-text">GAME ON!</div>
          <div className="visual-card">
            <span>THE ULTIMATE EXPERIENCE</span>
            <h2>CRICKET.</h2>
            <h2>PASSION.</h2>
            <h2>VICTORY.</h2>
          </div>
        </div>
      </section>

      <section className="home-features">
        <div className="section-heading">
          <span>YOUR GAME STARTS HERE</span>
          <h2>Everything You Need</h2>
          <p>Your gateway to an unforgettable cricket experience.</p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Explore Matches</h3>
            <p>Discover exciting IPL matchups and upcoming games.</p>
            <button onClick={() => navigate("/matches")}>
              View Matches →
            </button>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎟️</div>
            <h3>Book Tickets</h3>
            <p>Reserve your seats and get ready for match day.</p>
            <button onClick={() => navigate("/booking")}>
              Book Now →
            </button>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📋</div>
            <h3>Booking History</h3>
            <p>Keep track of your previous ticket bookings.</p>
            <button onClick={() => navigate("/history")}>
              View History →
            </button>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <h2>IPL TICKET BOOKING</h2>
        <p>Made for the love of cricket. 🏏</p>
        <span>© 2026 IPL Ticket Booking Portal</span>
      </footer>

    </div>
  );
}

export default Home;
