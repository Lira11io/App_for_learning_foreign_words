import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Slider, Table, Error } from "./pages";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <nav>
            <NavLink to="/">Домашняя страница</NavLink>
            <NavLink to="/table">Список слов</NavLink>
            <NavLink to="/slider">Карточки слов</NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/table" element={<Table />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
