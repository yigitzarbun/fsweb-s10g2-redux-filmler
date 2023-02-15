import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import MovieHeader from "./components/MovieHeader";
import AddMovieForm from "./components/AddMovieForm";
import FavoriteMovieList from "./components/FavoriteMovieList";
import { useSelector } from "react-redux";
import { loadInitialFavs } from "./actions/favoritesActions";
import { loadInitialMovies } from "./actions/movieActions";
import { useDispatch } from "react-redux";

const App = (props) => {
  const dispatch = useDispatch();
  const displayFavorites = useSelector(
    (store) => store.favouriteReducer.displayFavorites
  );

  useEffect(() => {
    dispatch(loadInitialFavs());
    dispatch(loadInitialMovies());
  }, []);

  return (
    <div>
      <nav className="bg-zinc-800 px-6 py-3">
        <h1 className="text-xl text-white">Redux Film Projesi</h1>
      </nav>

      <div className="max-w-4xl mx-auto px-3 pb-4">
        <MovieHeader />
        <div className="flex flex-col sm:flex-row gap-4">
          {displayFavorites && <FavoriteMovieList />}

          <Switch>
            <Route exact path="/movies/add">
              <AddMovieForm />
            </Route>

            <Route path="/movies/:id">
              <Movie />
            </Route>

            <Route path="/movies">
              <MovieList />
            </Route>

            <Route path="/">
              <Redirect to="/movies" />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
