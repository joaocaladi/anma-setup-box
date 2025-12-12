import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import PrivacyPage from './components/PrivacyPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacidade" element={<PrivacyPage />} />
      </Routes>
    </Router>
  )
}

export default App
