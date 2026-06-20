import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SetList from './pages/SetList'
import Lyrics from './pages/Lyrics'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SetList />} />
        <Route path="/lyrics/:songId" element={<Lyrics />} />
      </Routes>
    </BrowserRouter>
  )
}
