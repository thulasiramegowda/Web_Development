
import { Link } from "react-router-dom";

function BookingHistory() {
  return (
    <main className="history-page">

      {/* HERO SECTION */}
      <section className="history-hero">
        <div className="history-hero-content">
          <span className="history-tag">YOUR IPL JOURNEY</span>
          <h1>Every Match. <span>Every Memory.</span></h1>
          <p>
            Keep track of your bookings and get ready
            for your next unforgettable cricket experience.
          </p>
        </div>

        <div className="history-hero-decoration">🎟️</div>
      </section>

      {/* DASHBOARD */}
      <section className="history-content">

        <div className="history-heading">
          <div>
            <span>YOUR ACCOUNT</span>
            <h2>Booking Overview</h2>
            <p>Your ticket activity at a glance.</p>
          </div>

          <Link to="/booking" className="history-new-booking">
            + Book Tickets
          </Link>
        </div>

        {/* STATISTICS */}
        <div className="history-stats">

          <div className="history-stat-card">
            <div className="history-stat-icon orange">🎟️</div>
            <span>TOTAL BOOKINGS</span>
            <h2>0</h2>
            <p>All your reservations</p>
          </div>

          <div className="history-stat-card">
            <div className="history-stat-icon blue">🏏</div>
            <span>TOTAL TICKETS</span>
            <h2>0</h2>
            <p>Seats reserved</p>
          </div>

          <div className="history-stat-card">
            <div className="history-stat-icon green">✓</div>
            <span>CONFIRMED</span>
            <h2>0</h2>
            <p>Successful bookings</p>
          </div>

        </div>

        {/* BOOKING HISTORY */}
        <section className="history-list-section">

          <div className="history-list-heading">
            <div>
              <span>YOUR RESERVATIONS</span>
              <h2>Recent Bookings</h2>
            </div>

            <span className="history-count">0 RECORDS</span>
          </div>

          <div className="history-empty">

            <div className="history-empty-icon">
              🎫
            </div>

            <span className="history-empty-tag">NO BOOKINGS YET</span>

            <h2>Your next big match awaits!</h2>

            <p>
              You haven't booked any IPL tickets yet.
              Explore upcoming matches and reserve your
              favourite seats to experience the excitement live.
            </p>

            <Link to="/matches" className="history-explore-btn">
              Explore Matches <span>→</span>
            </Link>

          </div>

        </section>

      </section>

      {/* FOOTER */}
      <section className="history-footer">
        <h2>THE GAME IS BETTER LIVE.</h2>
        <p>Make memories. Cheer louder. Live cricket.</p>
      </section>

    </main>
  );
}

export default BookingHistory;
