import './App.css';
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Personal from "./Profile/Personal";
import Profile from "./Profile/Public";
import EditProfile from "src/Profile/Edit";
import SearchPage from './Home/Search/searchPage';
import CreateProfile from "src/Profile/Signup"
import SignIn from "src/Profile/Signin";
import store from "./store";
import { Provider } from "react-redux";
import Home from './Home';
import Restaurant from './Restaurant'
import ReviewsPage from './Posts';

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element = {<Personal />} />
          <Route path="/profile/:profileId" element = {<Profile />} />
          <Route path="/profile/edit" element = {<EditProfile />} />
          <Route path="/restaurant/:rId" element = {<Restaurant />} />
          <Route path="/signup" element = {<CreateProfile />} />
          <Route path="/login" element = {<SignIn />} />
          <Route path="/restaurant/:rId/review" element= {<ReviewsPage/>} />
        </Routes>
      </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
