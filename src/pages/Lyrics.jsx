import { useParams, Link } from 'react-router-dom'
import { songs } from '../data/songs'
import './Lyrics.css'

function parseLyrics(text) {
  return text.split('\n\n').map((block, i) => {
    const lines = block.split('\n')
    return { lines, key: i }
  })
}

export default function Lyrics() {
  const { songId } = useParams()
  const song = songs.find(s => s.id === songId)

  if (!song) {
    return (
      <div className="lyrics-page">
        <div className="lyrics-header">
          <Link to="/" className="back-btn">
            <span className="back-arrow">←</span>
            <span className="back-text">SET LIST</span>
          </Link>
        </div>
        <div className="lyrics-content">
          <p className="not-found">Song not found.</p>
        </div>
      </div>
    )
  }

  const sections = parseLyrics(song.lyrics)
  const songIndex = songs.findIndex(s => s.id === songId)
  const prevSong = songs[songIndex - 1]
  const nextSong = songs[songIndex + 1]

  return (
    <div className="lyrics-page">
      <div className="lyrics-header">
        <Link to="/" className="back-btn">
          <span className="back-arrow">←</span>
          <span className="back-text">SET LIST</span>
        </Link>
        <div className="lotg-small">
          <span className="ls-l">L</span>
          <span className="ls-o">O</span>
          <span className="ls-t">T</span>
          <span className="ls-g">G</span>
        </div>
      </div>

      <div className="lyrics-content">
        <div className="song-meta">
          <span className="song-num-badge">{song.number}</span>
        </div>
        <h1 className="song-title-lg">{song.title}</h1>

        <div className="lyrics-body">
          {sections.map(({ lines, key }) => (
            <div key={key} className="lyric-block">
              {lines.map((line, i) =>
                line.startsWith('[') ? (
                  <p key={i} className="section-label">
                    {line.replace(/[\[\]]/g, '')}
                  </p>
                ) : (
                  <p key={i} className="lyric-line">
                    {line || ' '}
                  </p>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="song-nav">
        {prevSong ? (
          <Link to={`/lyrics/${prevSong.id}`} className="nav-btn nav-prev">
            <span className="nav-arrow">←</span>
            <span className="nav-label">{prevSong.title}</span>
          </Link>
        ) : (
          <span className="nav-btn nav-disabled" />
        )}
        {nextSong ? (
          <Link to={`/lyrics/${nextSong.id}`} className="nav-btn nav-next">
            <span className="nav-label">{nextSong.title}</span>
            <span className="nav-arrow">→</span>
          </Link>
        ) : (
          <span className="nav-btn nav-disabled" />
        )}
      </div>
    </div>
  )
}
