
import { useState } from "react";

function Booking() {
  const [name, setName] = useState("");
  const [tickets, setTickets] = useState("");
  const [stand, setStand] = useState("");
  const [venue, setVenue] = useState("");
  const [booked, setBooked] = useState(false);

  function handleBooking() {
    if (!name.trim() || !tickets || !stand || !venue) {
      alert("Please fill all the details");
      return;
    }

    if (!Number.isInteger(Number(tickets)) || Number(tickets) < 1) {
      alert("Please enter a valid number of tickets");
      return;
    }

    setBooked(true);
    alert("Ticket booked successfully!");
  }

  return (
    <main className="booking-page">

      <section className="booking-hero">
        <div className="booking-hero-content">
          <span className="booking-tag">YOUR MATCHDAY STARTS HERE</span>
          <h1>Make It A <span>Matchday.</span></h1>
          <p>
            The stadium is calling. Reserve your seats,
            bring your energy and experience cricket live.
          </p>
        </div>
        <div className="booking-hero-decoration">🏏</div>
      </section>

      <section className="booking-layout">

        <div className="booking-main">
          <div className="booking-heading">
            <span>01 — RESERVATION</span>
            <h2>Book Your Tickets</h2>
            <p>Enter your details to reserve your stadium experience.</p>
          </div>

          <div className="booking-form">

            <div className="booking-input-group">
              <label htmlFor="name">FULL NAME</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setBooked(false);
                }}
                placeholder="Enter your full name"
              />
            </div>

            <div className="booking-input-group">
              <label htmlFor="tickets">NUMBER OF TICKETS</label>
              <input
                id="tickets"
                type="number"
                min="1"
                step="1"
                value={tickets}
                onChange={(e) => {
                  setTickets(e.target.value);
                  setBooked(false);
                }}
                placeholder="How many seats?"
              />
            </div>

            <div className="booking-input-group">
              <label htmlFor="stand">SELECT YOUR STAND</label>
              <select
                id="stand"
                value={stand}
                onChange={(e) => {
                  setStand(e.target.value);
                  setBooked(false);
                }}
              >
                <option value="">Choose your experience</option>
                <option value="General Stand">General Stand</option>
                <option value="VIP Stand">VIP Stand</option>
              </select>
            </div>

            <div className="booking-input-group">
              <label htmlFor="venue">SELECT STADIUM</label>
              <select
                id="venue"
                value={venue}
                onChange={(e) => {
                  setVenue(e.target.value);
                  setBooked(false);
                }}
              >
                <option value="">Choose your stadium</option>
                <option value="Wankhede Stadium">Wankhede Stadium</option>
                <option value="M. Chinnaswamy Stadium">
                  M. Chinnaswamy Stadium
                </option>
              </select>
            </div>

            <button className="booking-submit" onClick={handleBooking}>
              {booked ? "BOOKING CONFIRMED ✓" : "CONFIRM YOUR BOOKING"}
              <span>→</span>
            </button>

            <p className="booking-note">
              ✦ Your matchday experience begins with one click.
            </p>

          </div>
        </div>

        <aside className="ticket-preview">

          <div className="ticket-top">
            <span>IPL MATCH PASS</span>
            <span className="ticket-status">
              {booked ? "CONFIRMED" : "PREVIEW"}
            </span>
          </div>

          <div className="ticket-art">
            <span>🏏</span>
            <h2>LIVE THE<br />GAME.</h2>
            <p>FEEL THE CRICKET FEVER</p>
          </div>

          <div className="ticket-divider">
            <span></span>
            <span></span>
          </div>

          <div className="ticket-details">
            <div>
              <small>NAME</small>
              <strong>{name || "Your Name"}</strong>
            </div>

            <div>
              <small>STADIUM</small>
              <strong>{venue || "Not selected"}</strong>
            </div>

            <div>
              <small>STAND</small>
              <strong>{stand || "Not selected"}</strong>
            </div>

            <div>
              <small>QUANTITY</small>
              <strong>{tickets || "0"} TICKET(S)</strong>
            </div>
          </div>

          <div className="ticket-bottom">
            <span>YOUR SEAT. YOUR MOMENT.</span>
            <strong>IPL 2026</strong>
          </div>

        </aside>

      </section>

      <section className="booking-footer">
        <h2>THE CROWD. THE ENERGY. THE GAME.</h2>
        <p>Don't just watch cricket. Be part of the experience.</p>
      </section>

    </main>
  );
}

export default Booking;
