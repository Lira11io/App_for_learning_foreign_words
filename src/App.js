import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import { Slider, Table, Error } from "./pages";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <nav className="nav">
              <NavLink className="nav-link" to="/">
                Домашняя страница
              </NavLink>
              <NavLink className="nav-link" to="/table">
                Список слов
              </NavLink>
              <NavLink className="nav-link" to="/slider">
                Карточки слов
              </NavLink>
            </nav>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/table" element={<Table />} />
              <Route path="/slider" element={<Slider />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
