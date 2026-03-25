import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Browse } from './pages/Browse';
import { List } from './pages/List';
import { Chat } from './pages/Chat';
import { Profile } from './pages/Profile';
import { BottomNav } from './components/BottomNav';

function Saved() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-surface">
      <h1 className="text-2xl font-bold text-slate-400">Saved Items (Coming Soon)</h1>
      <BottomNav />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface">
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/list" element={<List />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}
