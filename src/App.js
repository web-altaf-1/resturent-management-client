import logo from './logo.svg';
import './App.css';
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";

import Home from './Home';
function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
