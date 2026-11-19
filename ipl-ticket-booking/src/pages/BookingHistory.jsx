
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";

function BookingHistory() {

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function getBookings() {

    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      setError("Failed to retrieve bookings");
      setLoading(false);
      return;
    }

    setBookings(data);
    setLoading(false);
  }

  useEffect(() => {
    getBookings();
  }, []);

  const totalBookings = bookings.length;

  const totalTickets = bookings.reduce(
    (total, booking) => total + Number(booking.tickets),
    0
  );

  const confirmedBookings = bookings.length;

  return (
    <main className="history-page">

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

        <div className="history-stats">

          <div className="history-stat-card">
            <div className="history-stat-icon orange">🎟️</div>
            <span>TOTAL BOOKINGS</span>
            <h2>{totalBookings}</h2>
            <p>All your reservations</p>
          </div>

          <div className="history-stat-card">
            <div className="history-stat-icon blue">🏏</div>
            <span>TOTAL TICKETS</span>
            <h2>{totalTickets}</h2>
            <p>Seats reserved</p>
          </div>

          <div className="history-stat-card">
            <div className="history-stat-icon green">✓</div>
            <span>CONFIRMED</span>
            <h2>{confirmedBookings}</h2>
            <p>Successful bookings</p>
          </div>

        </div>

        <section className="history-list-section">

          <div className="history-list-heading">
            <div>
              <span>YOUR RESERVATIONS</span>
              <h2>Recent Bookings</h2>
            </div>

            <span className="history-count">
              {totalBookings} RECORDS
            </span>
          </div>

          {loading && (
            <p>Loading bookings...</p>
          )}

          {error && (
            <p>{error}</p>
          )}

          {!loading && !error && bookings.length === 0 && (

            <div className="history-empty">

              <div className="history-empty-icon">
                🎫
              </div>

              <span className="history-empty-tag">
                NO BOOKINGS YET
              </span>

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

          )}

          {!loading && !error && bookings.length > 0 && (

            <div className="history-bookings">

              {bookings.map((booking) => (

                <div className="history-stat-card" key={booking.id}>

                  <span>BOOKING #{booking.id}</span>

                  <h2>{booking.name}</h2>

                  <p>Tickets: {booking.tickets}</p>

                  <p>Stand: {booking.stand}</p>

                  <p>Stadium: {booking.venue}</p>

                  <small>
                    {new Date(booking.created_at).toLocaleString()}
                  </small>

                </div>

              ))}

            </div>

          )}

        </section>

      </section>

      <section className="history-footer">
        <h2>THE GAME IS BETTER LIVE.</h2>
        <p>Make memories. Cheer louder. Live cricket.</p>
      </section>

    </main>
  );
}

export default BookingHistory;
