import {
  ADD_MOVIE,
  DELETE_MOVIE,
  INITIAL_MOVIES,
} from "../actions/movieActions.js";
import movies from "../data.js";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
};

const key = "movies";

function writeToLocalStorage(data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function readFromLocalStorage() {
  return JSON.parse(localStorage.getItem(key));
}

function getInitialMovies(key) {
  const savedMovies = localStorage.getItem(key);
  if (savedMovies) {
    return readFromLocalStorage(key);
  } else {
    return initialState.movies;
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_MOVIES:
      return {
        ...state,
        movies: getInitialMovies(key),
      };

    case DELETE_MOVIE:
      const copyMovies = [...state.movies];
      const resultMovies = copyMovies.filter(
        (item) => action.payload !== item.id
      );
      writeToLocalStorage([...resultMovies]);
      return {
        ...state,
        movies: [...resultMovies],
      };
    case ADD_MOVIE:
      const newMovie = {
        id: Date.now(),
        title: action.payload.title,
        director: action.payload.director,
        metascore: action.payload.metascore,
        genre: action.payload.genre,
        description: action.payload.description,
      };
      writeToLocalStorage([...state.movies, newMovie]);
      const newMovies = [...state.movies, newMovie];
      return {
        ...state,
        movies: newMovies,
      };
    default:
      return state;
  }
};
export default reducer;
