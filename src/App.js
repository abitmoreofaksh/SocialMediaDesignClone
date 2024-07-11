import Home from "./pages/home/Home"

import Login from "./pages/login/Login";

import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={login ? <Home setLogin={setLogin} /> : <Login setLogin={setLogin} />} />
          <Route path="/profile" element={login ? <Profile /> : <Login setLogin={setLogin} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
