import { Link } from 'react-router-dom'
import { songs } from '../data/songs'
import './SetList.css'

export default function SetList() {
  const leftCol = songs.slice(0, 6)
  const rightCol = songs.slice(6, 12)

  return (
    <div className="setlist-page">
      <div className="header">
        <img src="/backdrop.png" alt="Love Of The Game band rehearsal" className="backdrop-img" />
        <div className="logo-container">
          <img src="/logo.png" alt="Love Of The Game" className="lotg-logo-img" />
        </div>
      </div>

      <div className="concert-section">
        <h1 className="concert-title">BETTER LATE THAN NEVER</h1>
        <div className="concert-date">
          <span className="date-star red-star">★</span>
          <span className="date-text">JULY 3<sup>RD</sup> 2026</span>
          <span className="date-star blue-star">★</span>
        </div>

        <div className="setlist-grid">
          <div className="col">
            {leftCol.map(song => (
              <Link to={`/lyrics/${song.id}`} key={song.id} className="song-item">
                <span className="song-num">{song.number}</span>
                <span className="song-title">{song.title}</span>
              </Link>
            ))}
          </div>
          <div className="col">
            {rightCol.map(song => (
              <Link to={`/lyrics/${song.id}`} key={song.id} className="song-item">
                <span className="song-num">{song.number}</span>
                <span className="song-title">{song.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="band-members">
          <span className="member member-r">ERIC</span>
          <span className="member-star">★</span>
          <span className="member member-b">JOSH</span>
          <span className="member-star">★</span>
          <span className="member member-g">AARON</span>
          <span className="member-star">★</span>
          <span className="member member-o">EUSONH</span>
        </div>

        <div className="footer">
          <span className="footer-label">LIVE SHOW</span>
          <div className="footer-stars">
            <span className="fs-r">★</span>
            <span className="fs-b">★</span>
            <span className="fs-g">★</span>
            <span className="fs-o">★</span>
          </div>
          <span className="footer-label">ONE DAY ONLY</span>
        </div>
      </div>
    </div>
  )
}
