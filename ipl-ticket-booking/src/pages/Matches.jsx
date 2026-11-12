
import { useNavigate } from "react-router-dom";

function MatchCard(props) {
  const navigate = useNavigate();

  return (
    <div className="match-card">

      <div className="match-card-top">
        <span className="match-label">IPL FIXTURE</span>
        <span className="match-number">{props.number}</span>
      </div>

      <div className="teams-display">

        <div className="team">
          <div className={`team-circle ${props.team1.toLowerCase()}`}>
            {props.team1}
          </div>
          <h2>{props.team1}</h2>
        </div>

        <div className="versus">
          <span>VS</span>
        </div>

        <div className="team">
          <div className={`team-circle ${props.team2.toLowerCase()}`}>
            {props.team2}
          </div>
          <h2>{props.team2}</h2>
        </div>

      </div>

      <div className="match-divider"></div>

      <div className="match-info">
        <p>
          <span>📍</span> {props.venue}
        </p>
        <p>
          <span>📅</span> {props.date}
        </p>
      </div>

      <button
        className="match-book-btn"
        onClick={() => navigate("/booking")}
      >
        Book Tickets <span>→</span>
      </button>

    </div>
  );
}

function Matches() {
  return (
    <main className="matches-page">

      <section className="matches-hero">
        <span className="matches-tag">THE CRICKET FESTIVAL</span>

        <h1>
          Upcoming <span>IPL</span> Matches
        </h1>

        <p>
          Every match has a story. Be there to witness yours.
        </p>

        <div className="matches-decoration">🏏</div>
      </section>

      <section className="matches-content">

        <div className="matches-section-heading">
          <div>
            <span>DON'T MISS THE ACTION</span>
            <h2>Featured Fixtures</h2>
          </div>

          <div className="match-count">
            02 MATCHES
          </div>
        </div>

        <div className="matches-grid">

          <MatchCard
            number="MATCH 01"
            team1="RCB"
            team2="CSK"
            venue="M. Chinnaswamy Stadium, Bengaluru"
            date="25 March 2026"
          />

          <MatchCard
            number="MATCH 02"
            team1="MI"
            team2="KKR"
            venue="Wankhede Stadium, Mumbai"
            date="28 March 2026"
          />

        </div>

      </section>

      <div className="matches-bottom">
        <h2>Feel the excitement. Experience the game.</h2>
        <p>Your seat is waiting. Book your tickets today!</p>
      </div>

    </main>
  );
}

export default Matches;
