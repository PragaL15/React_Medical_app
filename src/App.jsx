import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Appoinmenet from './pages/Appoinments'
import Note from './pages/Notes'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Dashboard />} />
        <Route path="/Appoinmenet" element={<Appoinmenet/>} />
        <Route path="/Note" element={<Note />} />
      </Routes>
    </Router>
  );
}

export default App;
