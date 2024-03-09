import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import DetailsMovie from "./pages/DetailsMovie";
import axios from "axios";

function App() {
  const [allMovies, setAllMoovies] = useState<any>([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=f2ef4ff4389d038d917bba6974e77051"
      )
      .then((response) => {
        setAllMoovies(response.data.results);
        console.log(allMovies);
      });
  }, []);

  return (
    <Router>
      <div className="container app">
        <Routes>
          <Route path="/" element={<Home allMovies={allMovies} />} />
          <Route
            path="/detail/:id"
            element={<DetailsMovie allMovies={allMovies} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
