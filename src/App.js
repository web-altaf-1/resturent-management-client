import logo from './logo.svg';
import './App.css';
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Personal from "./Profile/Personal";
import Profile from "./Profile/Public";
import EditProfile from "src/Profile/Edit";
import store from "./store";
import { Provider } from "react-redux";
import Home from './Home';
function App() {
  return (
    <HashRouter>
      <Provider store={store}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element = {<Personal />} />
          <Route path="/profile/*" element = {<Profile />} />
          <Route path="/profile/edit" element = {<EditProfile />} />
        </Routes>
      </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
