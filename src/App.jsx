import { Routes, Route, NavLink } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const MovieCast = lazy(() => import("./components/MovieCast"));
const MovieReviews = lazy(() => import("./components/MovieReviews"));
const Navigation = lazy(() => import("./components/Navigation"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            {}
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
